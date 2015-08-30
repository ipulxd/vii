module.exports = function(OrderItem) {

  OrderItem.observe('after save', function(ctx, next) {

    if (ctx.instance) {
      if (ctx.isNewInstance) {
        // Add Order orderAmount
        OrderItem.app.models.Order.findById(
          ctx.instance.orderId,
          {},
          function (err, res) {
            if (err) next(err);
            res.orderAmount = Number(res.orderAmount) + Number(ctx.instance.priceTotal);
            res.save();
            // Add SONumber soAmount
            OrderItem.app.models.SONumber.findById(res.soNumberId, {}, function (err, so) {
              if (err) next(err);
              so.soAmount = Number(so.soAmount) + Number(ctx.instance.priceTotal);
              so.save();
              // Add SOGroupValue currentAmount
              var nowYear = new Date().getFullYear();
              OrderItem.app.models.SOGroupValue.findOne(
                { where: {soGroupId: so.soGroupId, year: nowYear} },
                function (err, sgv) {
                  if (err) next(err);
                  if (sgv) {
                    sgv.currentValue = Number(sgv.currentValue) + Number(ctx.instance.priceTotal);
                    sgv.save();
                  } else { // create if nonexistent
                    OrderItem.app.models.SOGroupValue.create({
                      soGroupId: so.soGroupId,
                      year: nowYear,
                      currentValue: Number(ctx.instance.priceTotal)
                    });
                  }
                }
              );
            });
          }
        );
      }
    }

    next();
  });

  OrderItem.observe('before delete', function (ctx, next) {

    if (ctx.instance) {
      // Subtract Order orderAmount
      OrderItem.app.models.Order.findById(
        ctx.instance.orderId,
        {},
        function (err, res) {
          if (err) next(err);
          res.orderAmount = Number(res.orderAmount) - Number(ctx.instance.priceTotal);
          res.save();
          // Subtract SONumber soAmount
          OrderItem.app.models.SONumber.findById(res.soNumberId, {}, function (err, so) {
              if (err) next(err);
              so.soAmount = Number(so.soAmount) - Number(ctx.instance.priceTotal);
              so.save();
              // Subtract SOGroupValue currentAmount
              // Add SOGroupValue currentAmount
              var nowYear = new Date().getFullYear();
              OrderItem.app.models.SOGroupValue.findOne(
                { where: {soGroupId: so.soGroupId, year: nowYear} },
                function (err, sgv) {
                  if (err) next(err);
                  sgv.currentValue = Number(sgv.currentValue) - Number(ctx.instance.priceTotal);
                  sgv.save();
                }
              );
            }
          );
        }
      );
    }

    next();
  });

};
