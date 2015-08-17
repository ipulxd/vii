module.exports = function(Product) {

  Product.currentPriceOptions = function (id, limit, cb) {
    var currentDateISO = new Date().toISOString();

    if (!limit) {
      limit = 1000; // just limit to 1000
    }

    Product.app.models.ProductPrice.find({
        where: {
          and: [
            {productId: id},
            {dateFrom: {lte: currentDateISO}},
            {dateTo: {gte: currentDateISO}},
            {active: true}
          ]
        },
        order: [
          'id DESC' // get latest price first
        ],
        limit: limit
      },
      function (err, instance) {
        cb(null, instance);
      });

  };

  Product.currentStockOptions = function (id, limit, cb) {
    var currentDateISO = new Date().toISOString();

    if (!limit) {
      limit = 1000; // just limit to 1000
    }

    Product.app.models.ProductStock.find({
        where: {
          and: [
            {productId: id},
            {dateExpire: {gt: currentDateISO}},
            {active: true},
            {amountCurrent: {gt: 0}}
          ]
        },
        order: [
          'dateExpire ASC', // get stock with nearest expiration date
          'dateStock ASC', // fifo
          'id ASC' // fifo:2
        ],
        limit: limit
      },
      function (err, instance) {
        cb(null, instance);
      });

  };

  Product.findAllWithActiveStocksAndPrices = function (cb) {
    var currentDateISO = new Date().toISOString();

    var limit = 1000; // just limit to 1000

    Product.find({
        where: {
          active: true
        },
        include: [
          { relation: 'productStocks',
            scope: {
              where: {
                and: [
                  {dateExpire: {gt: currentDateISO}},
                  {active: true},
                  {amountCurrent: {gt: 0}}
                ]
              },
              order: [
                'dateExpire ASC', // get stock with nearest expiration date
                'dateStock ASC', // fifo
                'id ASC' // fifo:2
              ]
            }
          },
          { relation: 'productPrices',
            scope: {
              where: {
                and: [
                  {dateFrom: {lte: currentDateISO}},
                  {dateTo: {gte: currentDateISO}},
                  {active: true}
                ]
              },
              order: [
                'id DESC' // get latest price first
              ]
            }
          }
        ],
        limit: limit
      },
      function (err, instance) {
        cb(null, instance);
      }
    );
  };

  Product.bulkUpdateStockAmount = function (cmd, data, cb) {
    var async = require('async');
    var updated = [];

    switch (cmd) {
      case 'add' :
            // check all stock id exist
            ids = data.map(function(a) { return a.id });
            Product.app.models.ProductStock.count({id: {inq: ids}}, function (err, num) {
              if (err) {
                cb(err, null);
              }
              if (num != ids.length) {
                cb('Not all stocks exist', null);
              } else {
                async.each(
                  data,
                  function (item, callback) {
                    Product.app.models.ProductStock.findById( item.id, function (err, stockInstance) {
                      if (err) callback(err, stockInstance);
                      if (stockInstance) {
                        stockInstance.amountCurrent += Number(item.amountDelta); // add
                        stockInstance.updateAttributes({amountCurrent: stockInstance.amountCurrent}, function (err, result) {
                          result.success = true;
                          updated.push(result);
                          callback(err, result);
                        });
                      } else {
                        callback('Wrong stock:' + item.id, item);
                      }
                    });
                  },
                  function (err, info) {
                    if (err) {
                      cb(err, info);
                    } else {
                      cb(null, updated);
                    }
                  }
                );
              }
            });
            break;
      case 'subtract' :
            // check all stock id exist
            ids = data.map(function(a) { return a.id });
            Product.app.models.ProductStock.count({id: {inq: ids}}, function (err, num) {
              if (err) {
                cb(err, null);
              }
              if (num != ids.length) {
                cb('Not all stocks exist', null);
              } else {
                async.each(
                  data,
                  function (item, callback) {
                    Product.app.models.ProductStock.findById( item.id, function (err, stockInstance) {
                      if (err) callback(err, stockInstance);
                      if (stockInstance) {
                        stockInstance.amountCurrent -= Number(item.amountDelta); // subtract
                        stockInstance.updateAttributes({amountCurrent: stockInstance.amountCurrent}, function (err, result) {
                          result.success = true;
                          updated.push(result);
                          callback(err, result);
                        });
                      } else {
                        callback('Wrong stock:' + item.id, item);
                      }
                    });
                  },
                  function (err, info) {
                    if (err) {
                      cb(err, info);
                    } else {
                      cb(null, updated);
                    }
                  }
                );
              }
            });
            break;
      default :
            cb (null, 'Command error');
    }

    //for (var i = 0; i < data.length; i++) {
    //  data[i].success = true;
    //  updated[i] = data[i];
    //  Product.app.models.ProductStock.updateAll({
    //      id: data[i].id
    //    },
    //    { amountCurrent: data[i].amountCurrent },
    //    function (err, info) {
    //      if (err) cb(err, info); // will break operation
    //
    //      completed++;
    //      if (completed == data.length) cb(null, updated);
    //    }
    //  );
    //}
  };

  Product.remoteMethod (
    'currentPriceOptions',
    {
      description: 'Get all current active prices for certain product {id}',
      http: {path: '/:id/currentPriceOptions', verb: 'get'},
      accepts: [
        {arg: 'id', type: 'number', required: 'true'},
        {arg: 'limit', type: 'number', http: {source: 'query'}}
      ],
      returns: {arg: 'currentPriceOptions', type: 'array', root: true}
    }
  );
  Product.remoteMethod (
    'currentStockOptions',
    {
      description: 'Get all current active stock for certain product {id}',
      http: {path: '/:id/currentStockOptions', verb: 'get'},
      accepts: [
        {arg: 'id', type: 'number', required: 'true'},
        {arg: 'limit', type: 'number', http: {source: 'query'}}
      ],
      returns: {arg: 'currentStockOptions', type: 'array', root: true}
    }
  );
  Product.remoteMethod (
    'findAllWithActiveStocksAndPrices',
    {
      description: 'Get all current active product with all active stocks (fifo order) and all active prices (update order)',
      http: {path: '/findAllWithActiveStocksAndPrices', verb: 'get'},
      returns: {arg: 'findAllWithActiveStocksAndPrices', type: 'Array', root: true}
    }
  );
  Product.remoteMethod (
    'bulkUpdateStockAmount',
    {
      description: 'Update arrays of stock for certain product {id}',
      http: {path: '/bulkUpdateStockAmount', verb: 'put'},
      accepts: [
        {arg: 'cmd', type: 'string', required: true, http: {source: 'query'}},
        {arg: 'data', type: 'array', required: true, http: {source: 'body'}}
      ],
      returns: {arg: 'bulkUpdateStockAmount', type: 'array', root: true}
    }
  );

};
