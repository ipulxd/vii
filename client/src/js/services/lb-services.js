(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Customer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Customers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Customer.customers.findById() instead.
        "prototype$__findById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.customers.destroyById() instead.
        "prototype$__destroyById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customers.updateById() instead.
        "prototype$__updateById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.childCustomers.findById() instead.
        "prototype$__findById__childCustomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/childCustomers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.childCustomers.destroyById() instead.
        "prototype$__destroyById__childCustomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/childCustomers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.childCustomers.updateById() instead.
        "prototype$__updateById__childCustomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/childCustomers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.parentCustomer() instead.
        "prototype$__get__parentCustomer": {
          url: urlBase + "/Customers/:id/parentCustomer",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orderGroups.findById() instead.
        "prototype$__findById__orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orderGroups.destroyById() instead.
        "prototype$__destroyById__orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orderGroups.updateById() instead.
        "prototype$__updateById__orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orderGroups.link() instead.
        "prototype$__link__orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orderGroups.unlink() instead.
        "prototype$__unlink__orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orderGroups.exists() instead.
        "prototype$__exists__orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Customer.customers() instead.
        "prototype$__get__customers": {
          isArray: true,
          url: urlBase + "/Customers/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Customer.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/Customers/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Customer.customers.destroyAll() instead.
        "prototype$__delete__customers": {
          url: urlBase + "/Customers/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customers.count() instead.
        "prototype$__count__customers": {
          url: urlBase + "/Customers/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.childCustomers() instead.
        "prototype$__get__childCustomers": {
          isArray: true,
          url: urlBase + "/Customers/:id/childCustomers",
          method: "GET"
        },

        // INTERNAL. Use Customer.childCustomers.create() instead.
        "prototype$__create__childCustomers": {
          url: urlBase + "/Customers/:id/childCustomers",
          method: "POST"
        },

        // INTERNAL. Use Customer.childCustomers.destroyAll() instead.
        "prototype$__delete__childCustomers": {
          url: urlBase + "/Customers/:id/childCustomers",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.childCustomers.count() instead.
        "prototype$__count__childCustomers": {
          url: urlBase + "/Customers/:id/childCustomers/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/Customers/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.orderGroups() instead.
        "prototype$__get__orderGroups": {
          isArray: true,
          url: urlBase + "/Customers/:id/orderGroups",
          method: "GET"
        },

        // INTERNAL. Use Customer.orderGroups.create() instead.
        "prototype$__create__orderGroups": {
          url: urlBase + "/Customers/:id/orderGroups",
          method: "POST"
        },

        // INTERNAL. Use Customer.orderGroups.destroyAll() instead.
        "prototype$__delete__orderGroups": {
          url: urlBase + "/Customers/:id/orderGroups",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orderGroups.count() instead.
        "prototype$__count__orderGroups": {
          url: urlBase + "/Customers/:id/orderGroups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#create
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createMany
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#upsert
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Customers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#exists
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Customers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Customers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#find
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findOne
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Customers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#updateAll
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Customers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#deleteById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Customers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#count
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#prototype$updateAttributes
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Customers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createChangeStream
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Customers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.customers.findById() instead.
        "::findById::Customer::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.customers.destroyById() instead.
        "::destroyById::Customer::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customers.updateById() instead.
        "::updateById::Customer::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.childCustomers.findById() instead.
        "::findById::Customer::childCustomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/childCustomers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.childCustomers.destroyById() instead.
        "::destroyById::Customer::childCustomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/childCustomers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.childCustomers.updateById() instead.
        "::updateById::Customer::childCustomers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/childCustomers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.parentCustomer() instead.
        "::get::Customer::parentCustomer": {
          url: urlBase + "/Customers/:id/parentCustomer",
          method: "GET"
        },

        // INTERNAL. Use Customer.customers() instead.
        "::get::Customer::customers": {
          isArray: true,
          url: urlBase + "/Customers/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Customer.customers.create() instead.
        "::create::Customer::customers": {
          url: urlBase + "/Customers/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Customer.customers.createMany() instead.
        "::createMany::Customer::customers": {
          isArray: true,
          url: urlBase + "/Customers/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Customer.customers.destroyAll() instead.
        "::delete::Customer::customers": {
          url: urlBase + "/Customers/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customers.count() instead.
        "::count::Customer::customers": {
          url: urlBase + "/Customers/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.childCustomers() instead.
        "::get::Customer::childCustomers": {
          isArray: true,
          url: urlBase + "/Customers/:id/childCustomers",
          method: "GET"
        },

        // INTERNAL. Use Customer.childCustomers.create() instead.
        "::create::Customer::childCustomers": {
          url: urlBase + "/Customers/:id/childCustomers",
          method: "POST"
        },

        // INTERNAL. Use Customer.childCustomers.createMany() instead.
        "::createMany::Customer::childCustomers": {
          isArray: true,
          url: urlBase + "/Customers/:id/childCustomers",
          method: "POST"
        },

        // INTERNAL. Use Customer.childCustomers.destroyAll() instead.
        "::delete::Customer::childCustomers": {
          url: urlBase + "/Customers/:id/childCustomers",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.childCustomers.count() instead.
        "::count::Customer::childCustomers": {
          url: urlBase + "/Customers/:id/childCustomers/count",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.customers.findById() instead.
        "::findById::OrderGroup::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.customers.destroyById() instead.
        "::destroyById::OrderGroup::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.customers.updateById() instead.
        "::updateById::OrderGroup::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderGroup.customers.link() instead.
        "::link::OrderGroup::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderGroup.customers.unlink() instead.
        "::unlink::OrderGroup::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.customers.exists() instead.
        "::exists::OrderGroup::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use OrderGroup.customers() instead.
        "::get::OrderGroup::customers": {
          isArray: true,
          url: urlBase + "/OrderGroups/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.customers.create() instead.
        "::create::OrderGroup::customers": {
          url: urlBase + "/OrderGroups/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use OrderGroup.customers.createMany() instead.
        "::createMany::OrderGroup::customers": {
          isArray: true,
          url: urlBase + "/OrderGroups/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use OrderGroup.customers.destroyAll() instead.
        "::delete::OrderGroup::customers": {
          url: urlBase + "/OrderGroups/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.customers.count() instead.
        "::count::OrderGroup::customers": {
          url: urlBase + "/OrderGroups/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Order.customer() instead.
        "::get::Order::customer": {
          url: urlBase + "/Orders/:id/customer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Customer#updateOrCreate
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#update
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#destroyById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#removeById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Customer#modelName
    * @propertyOf lbServices.Customer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Customer`.
    */
    R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name lbServices.Customer.customers
     * @header lbServices.Customer.customers
     * @object
     * @description
     *
     * The object `Customer.customers` groups methods
     * manipulating `Customer` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#customers Customer.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#customers
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries customers of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Customer::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customers#count
         * @methodOf lbServices.Customer.customers
         *
         * @description
         *
         * Counts customers of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customers.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::Customer::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customers#create
         * @methodOf lbServices.Customer.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Customer::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customers#createMany
         * @methodOf lbServices.Customer.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Customer::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customers#destroyAll
         * @methodOf lbServices.Customer.customers
         *
         * @description
         *
         * Deletes all customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::Customer::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customers#destroyById
         * @methodOf lbServices.Customer.customers
         *
         * @description
         *
         * Delete a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::Customer::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customers#findById
         * @methodOf lbServices.Customer.customers
         *
         * @description
         *
         * Find a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::Customer::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customers#updateById
         * @methodOf lbServices.Customer.customers
         *
         * @description
         *
         * Update a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::Customer::customers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.childCustomers
     * @header lbServices.Customer.childCustomers
     * @object
     * @description
     *
     * The object `Customer.childCustomers` groups methods
     * manipulating `Customer` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#childCustomers Customer.childCustomers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#childCustomers
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries childCustomers of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.childCustomers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.childCustomers#count
         * @methodOf lbServices.Customer.childCustomers
         *
         * @description
         *
         * Counts childCustomers of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.childCustomers.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.childCustomers#create
         * @methodOf lbServices.Customer.childCustomers
         *
         * @description
         *
         * Creates a new instance in childCustomers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.childCustomers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.childCustomers#createMany
         * @methodOf lbServices.Customer.childCustomers
         *
         * @description
         *
         * Creates a new instance in childCustomers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.childCustomers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.childCustomers#destroyAll
         * @methodOf lbServices.Customer.childCustomers
         *
         * @description
         *
         * Deletes all childCustomers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.childCustomers.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.childCustomers#destroyById
         * @methodOf lbServices.Customer.childCustomers
         *
         * @description
         *
         * Delete a related item by id for childCustomers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for childCustomers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.childCustomers.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.childCustomers#findById
         * @methodOf lbServices.Customer.childCustomers
         *
         * @description
         *
         * Find a related item by id for childCustomers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for childCustomers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.childCustomers.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.childCustomers#updateById
         * @methodOf lbServices.Customer.childCustomers
         *
         * @description
         *
         * Update a related item by id for childCustomers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for childCustomers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.childCustomers.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::Customer::childCustomers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#parentCustomer
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches belongsTo relation parentCustomer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.parentCustomer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Customer::parentCustomer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.orders
     * @header lbServices.Customer.orders
     * @object
     * @description
     *
     * The object `Customer.orders` groups methods
     * manipulating `Order` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#orders Customer.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#orders
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries orders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#count
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Counts orders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#create
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#createMany
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#destroyAll
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#destroyById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#findById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#updateById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Customer::orders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.orderGroups
     * @header lbServices.Customer.orderGroups
     * @object
     * @description
     *
     * The object `Customer.orderGroups` groups methods
     * manipulating `OrderGroup` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#orderGroups Customer.orderGroups()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#orderGroups
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries orderGroups of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroups = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::get::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#count
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Counts orderGroups of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orderGroups.count = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::count::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#create
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Creates a new instance in orderGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroups.create = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::create::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#createMany
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Creates a new instance in orderGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroups.createMany = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::createMany::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#destroyAll
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Deletes all orderGroups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderGroups.destroyAll = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::delete::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#destroyById
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Delete a related item by id for orderGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderGroups.destroyById = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::destroyById::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#exists
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Check the existence of orderGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroups.exists = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::exists::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#findById
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Find a related item by id for orderGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroups.findById = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::findById::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#link
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Add a related item by id for orderGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroups.link = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::link::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#unlink
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Remove the orderGroups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderGroups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderGroups.unlink = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::unlink::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orderGroups#updateById
         * @methodOf lbServices.Customer.orderGroups
         *
         * @description
         *
         * Update a related item by id for orderGroups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderGroups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroups.updateById = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::updateById::Customer::orderGroups"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Person
 * @header lbServices.Person
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Person` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Person",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/People/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Person.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/People/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Person.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/People/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Person.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/People/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Person.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/People/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/People/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/People/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#create
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/People",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#createMany
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/People",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#upsert
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/People",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#exists
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/People/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#findById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/People/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#find
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/People",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#findOne
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/People/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#updateAll
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/People/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#deleteById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/People/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#count
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/People/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#prototype$updateAttributes
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/People/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#createChangeStream
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/People/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#login
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/People/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#logout
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/People/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#confirm
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/People/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#resetPassword
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/People/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#updatePassword
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update user password
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string}` - 
         *
         *  - `password` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `updated` – `{boolean=}` - 
         */
        "updatePassword": {
          url: urlBase + "/People/:id/updatePassword",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#isAllowed
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Check if user allowed
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `model` – `{string}` - 
         *
         *  - `modelId` – `{string}` - 
         *
         *  - `method` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `allowed` – `{boolean=}` - 
         */
        "isAllowed": {
          url: urlBase + "/People/isAllowed",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#myRole
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Get role of logged in user
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `role` – `{string=}` - 
         */
        "myRole": {
          url: urlBase + "/People/myRole",
          method: "GET"
        },

        // INTERNAL. Use Order.person() instead.
        "::get::Order::person": {
          url: urlBase + "/Orders/:id/person",
          method: "GET"
        },

        // INTERNAL. Use VAccessToken.user() instead.
        "::get::VAccessToken::user": {
          url: urlBase + "/VAccessTokens/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Person#getCurrent
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/People" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Person#updateOrCreate
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Person#update
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Person#destroyById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Person#removeById
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Person#getCachedCurrent
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Person#login} or
         * {@link lbServices.Person#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Person instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Person#isAuthenticated
         * @methodOf lbServices.Person
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Person#getCurrentId
         * @methodOf lbServices.Person
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Person#modelName
    * @propertyOf lbServices.Person
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Person`.
    */
    R.modelName = "Person";

    /**
     * @ngdoc object
     * @name lbServices.Person.orders
     * @header lbServices.Person.orders
     * @object
     * @description
     *
     * The object `Person.orders` groups methods
     * manipulating `Order` instances related to `Person`.
     *
     * Call {@link lbServices.Person#orders Person.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#orders
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries orders of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Person::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.orders#count
         * @methodOf lbServices.Person.orders
         *
         * @description
         *
         * Counts orders of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Person::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.orders#create
         * @methodOf lbServices.Person.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Person::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.orders#createMany
         * @methodOf lbServices.Person.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Person::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.orders#destroyAll
         * @methodOf lbServices.Person.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Person::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.orders#destroyById
         * @methodOf lbServices.Person.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Person::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.orders#findById
         * @methodOf lbServices.Person.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Person::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.orders#updateById
         * @methodOf lbServices.Person.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Person::orders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Person.accessTokens
     * @header lbServices.Person.accessTokens
     * @object
     * @description
     *
     * The object `Person.accessTokens` groups methods
     * manipulating `VAccessToken` instances related to `Person`.
     *
     * Call {@link lbServices.Person#accessTokens Person.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Person#accessTokens
         * @methodOf lbServices.Person
         *
         * @description
         *
         * Queries accessTokens of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::get::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.accessTokens#count
         * @methodOf lbServices.Person.accessTokens
         *
         * @description
         *
         * Counts accessTokens of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::count::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.accessTokens#create
         * @methodOf lbServices.Person.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::create::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.accessTokens#createMany
         * @methodOf lbServices.Person.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        R.accessTokens.createMany = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::createMany::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.accessTokens#destroyAll
         * @methodOf lbServices.Person.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::delete::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.accessTokens#destroyById
         * @methodOf lbServices.Person.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::destroyById::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.accessTokens#findById
         * @methodOf lbServices.Person.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::findById::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Person.accessTokens#updateById
         * @methodOf lbServices.Person.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("VAccessToken");
          var action = TargetResource["::updateById::Person::accessTokens"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Product",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Products/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Product.productPrices.findById() instead.
        "prototype$__findById__productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productPrices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.productPrices.destroyById() instead.
        "prototype$__destroyById__productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productPrices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productPrices.updateById() instead.
        "prototype$__updateById__productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productPrices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.productStocks.findById() instead.
        "prototype$__findById__productStocks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productStocks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.productStocks.destroyById() instead.
        "prototype$__destroyById__productStocks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productStocks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productStocks.updateById() instead.
        "prototype$__updateById__productStocks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productStocks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.orderItems.findById() instead.
        "prototype$__findById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orderItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.orderItems.destroyById() instead.
        "prototype$__destroyById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orderItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orderItems.updateById() instead.
        "prototype$__updateById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orderItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.orders.link() instead.
        "prototype$__link__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.orders.unlink() instead.
        "prototype$__unlink__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orders.exists() instead.
        "prototype$__exists__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Product.productPrices() instead.
        "prototype$__get__productPrices": {
          isArray: true,
          url: urlBase + "/Products/:id/productPrices",
          method: "GET"
        },

        // INTERNAL. Use Product.productPrices.create() instead.
        "prototype$__create__productPrices": {
          url: urlBase + "/Products/:id/productPrices",
          method: "POST"
        },

        // INTERNAL. Use Product.productPrices.destroyAll() instead.
        "prototype$__delete__productPrices": {
          url: urlBase + "/Products/:id/productPrices",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productPrices.count() instead.
        "prototype$__count__productPrices": {
          url: urlBase + "/Products/:id/productPrices/count",
          method: "GET"
        },

        // INTERNAL. Use Product.productStocks() instead.
        "prototype$__get__productStocks": {
          isArray: true,
          url: urlBase + "/Products/:id/productStocks",
          method: "GET"
        },

        // INTERNAL. Use Product.productStocks.create() instead.
        "prototype$__create__productStocks": {
          url: urlBase + "/Products/:id/productStocks",
          method: "POST"
        },

        // INTERNAL. Use Product.productStocks.destroyAll() instead.
        "prototype$__delete__productStocks": {
          url: urlBase + "/Products/:id/productStocks",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productStocks.count() instead.
        "prototype$__count__productStocks": {
          url: urlBase + "/Products/:id/productStocks/count",
          method: "GET"
        },

        // INTERNAL. Use Product.orderItems() instead.
        "prototype$__get__orderItems": {
          isArray: true,
          url: urlBase + "/Products/:id/orderItems",
          method: "GET"
        },

        // INTERNAL. Use Product.orderItems.create() instead.
        "prototype$__create__orderItems": {
          url: urlBase + "/Products/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Product.orderItems.destroyAll() instead.
        "prototype$__delete__orderItems": {
          url: urlBase + "/Products/:id/orderItems",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orderItems.count() instead.
        "prototype$__count__orderItems": {
          url: urlBase + "/Products/:id/orderItems/count",
          method: "GET"
        },

        // INTERNAL. Use Product.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/Products/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Product.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/Products/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Product.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/Products/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/Products/:id/orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#create
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Products",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#createMany
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Products",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#upsert
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Products",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#exists
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Products/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Products/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#find
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Products",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findOne
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Products/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#updateAll
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Products/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#deleteById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Products/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#count
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Products/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$updateAttributes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Products/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#createChangeStream
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Products/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#currentPriceOptions
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Get all current active prices for certain product {id}
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{number}` - 
         *
         *  - `limit` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "currentPriceOptions": {
          isArray: true,
          url: urlBase + "/Products/:id/currentPriceOptions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#currentStockOptions
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Get all current active stock for certain product {id}
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{number}` - 
         *
         *  - `limit` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "currentStockOptions": {
          isArray: true,
          url: urlBase + "/Products/:id/currentStockOptions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findAllWithActiveStocksAndPrices
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Get all current active product with all active stocks (fifo order) and all active prices (update order)
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findAllWithActiveStocksAndPrices": {
          isArray: true,
          url: urlBase + "/Products/findAllWithActiveStocksAndPrices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#bulkUpdateStockAmount
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update arrays of stock for certain product {id}
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `cmd` – `{string}` - 
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "bulkUpdateStockAmount": {
          isArray: true,
          url: urlBase + "/Products/bulkUpdateStockAmount",
          method: "PUT"
        },

        // INTERNAL. Use Order.products.findById() instead.
        "::findById::Order::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/:fk",
          method: "GET"
        },

        // INTERNAL. Use Order.products.destroyById() instead.
        "::destroyById::Order::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.products.updateById() instead.
        "::updateById::Order::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.products.link() instead.
        "::link::Order::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.products.unlink() instead.
        "::unlink::Order::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.products.exists() instead.
        "::exists::Order::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Order.products() instead.
        "::get::Order::products": {
          isArray: true,
          url: urlBase + "/Orders/:id/products",
          method: "GET"
        },

        // INTERNAL. Use Order.products.create() instead.
        "::create::Order::products": {
          url: urlBase + "/Orders/:id/products",
          method: "POST"
        },

        // INTERNAL. Use Order.products.createMany() instead.
        "::createMany::Order::products": {
          isArray: true,
          url: urlBase + "/Orders/:id/products",
          method: "POST"
        },

        // INTERNAL. Use Order.products.destroyAll() instead.
        "::delete::Order::products": {
          url: urlBase + "/Orders/:id/products",
          method: "DELETE"
        },

        // INTERNAL. Use Order.products.count() instead.
        "::count::Order::products": {
          url: urlBase + "/Orders/:id/products/count",
          method: "GET"
        },

        // INTERNAL. Use ProductPrice.product() instead.
        "::get::ProductPrice::product": {
          url: urlBase + "/ProductPrices/:id/product",
          method: "GET"
        },

        // INTERNAL. Use ProductStock.product() instead.
        "::get::ProductStock::product": {
          url: urlBase + "/ProductStocks/:id/product",
          method: "GET"
        },

        // INTERNAL. Use OrderItem.product() instead.
        "::get::OrderItem::product": {
          url: urlBase + "/OrderItems/:id/product",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Product#updateOrCreate
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Product#update
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Product#destroyById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Product#removeById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Product#modelName
    * @propertyOf lbServices.Product
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Product`.
    */
    R.modelName = "Product";

    /**
     * @ngdoc object
     * @name lbServices.Product.productPrices
     * @header lbServices.Product.productPrices
     * @object
     * @description
     *
     * The object `Product.productPrices` groups methods
     * manipulating `ProductPrice` instances related to `Product`.
     *
     * Call {@link lbServices.Product#productPrices Product.productPrices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#productPrices
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries productPrices of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::get::Product::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productPrices#count
         * @methodOf lbServices.Product.productPrices
         *
         * @description
         *
         * Counts productPrices of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.productPrices.count = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::count::Product::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productPrices#create
         * @methodOf lbServices.Product.productPrices
         *
         * @description
         *
         * Creates a new instance in productPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.create = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::create::Product::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productPrices#createMany
         * @methodOf lbServices.Product.productPrices
         *
         * @description
         *
         * Creates a new instance in productPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.createMany = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::createMany::Product::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productPrices#destroyAll
         * @methodOf lbServices.Product.productPrices
         *
         * @description
         *
         * Deletes all productPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.productPrices.destroyAll = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::delete::Product::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productPrices#destroyById
         * @methodOf lbServices.Product.productPrices
         *
         * @description
         *
         * Delete a related item by id for productPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productPrices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.productPrices.destroyById = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::destroyById::Product::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productPrices#findById
         * @methodOf lbServices.Product.productPrices
         *
         * @description
         *
         * Find a related item by id for productPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productPrices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.findById = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::findById::Product::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productPrices#updateById
         * @methodOf lbServices.Product.productPrices
         *
         * @description
         *
         * Update a related item by id for productPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productPrices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.updateById = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::updateById::Product::productPrices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.productStocks
     * @header lbServices.Product.productStocks
     * @object
     * @description
     *
     * The object `Product.productStocks` groups methods
     * manipulating `ProductStock` instances related to `Product`.
     *
     * Call {@link lbServices.Product#productStocks Product.productStocks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#productStocks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries productStocks of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        R.productStocks = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::get::Product::productStocks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productStocks#count
         * @methodOf lbServices.Product.productStocks
         *
         * @description
         *
         * Counts productStocks of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.productStocks.count = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::count::Product::productStocks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productStocks#create
         * @methodOf lbServices.Product.productStocks
         *
         * @description
         *
         * Creates a new instance in productStocks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        R.productStocks.create = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::create::Product::productStocks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productStocks#createMany
         * @methodOf lbServices.Product.productStocks
         *
         * @description
         *
         * Creates a new instance in productStocks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        R.productStocks.createMany = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::createMany::Product::productStocks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productStocks#destroyAll
         * @methodOf lbServices.Product.productStocks
         *
         * @description
         *
         * Deletes all productStocks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.productStocks.destroyAll = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::delete::Product::productStocks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productStocks#destroyById
         * @methodOf lbServices.Product.productStocks
         *
         * @description
         *
         * Delete a related item by id for productStocks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productStocks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.productStocks.destroyById = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::destroyById::Product::productStocks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productStocks#findById
         * @methodOf lbServices.Product.productStocks
         *
         * @description
         *
         * Find a related item by id for productStocks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productStocks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        R.productStocks.findById = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::findById::Product::productStocks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.productStocks#updateById
         * @methodOf lbServices.Product.productStocks
         *
         * @description
         *
         * Update a related item by id for productStocks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productStocks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        R.productStocks.updateById = function() {
          var TargetResource = $injector.get("ProductStock");
          var action = TargetResource["::updateById::Product::productStocks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.orderItems
     * @header lbServices.Product.orderItems
     * @object
     * @description
     *
     * The object `Product.orderItems` groups methods
     * manipulating `OrderItem` instances related to `Product`.
     *
     * Call {@link lbServices.Product#orderItems Product.orderItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#orderItems
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries orderItems of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::get::Product::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orderItems#count
         * @methodOf lbServices.Product.orderItems
         *
         * @description
         *
         * Counts orderItems of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orderItems.count = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::count::Product::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orderItems#create
         * @methodOf lbServices.Product.orderItems
         *
         * @description
         *
         * Creates a new instance in orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.create = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::create::Product::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orderItems#createMany
         * @methodOf lbServices.Product.orderItems
         *
         * @description
         *
         * Creates a new instance in orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.createMany = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::createMany::Product::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orderItems#destroyAll
         * @methodOf lbServices.Product.orderItems
         *
         * @description
         *
         * Deletes all orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderItems.destroyAll = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::delete::Product::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orderItems#destroyById
         * @methodOf lbServices.Product.orderItems
         *
         * @description
         *
         * Delete a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderItems.destroyById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::destroyById::Product::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orderItems#findById
         * @methodOf lbServices.Product.orderItems
         *
         * @description
         *
         * Find a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.findById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::findById::Product::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orderItems#updateById
         * @methodOf lbServices.Product.orderItems
         *
         * @description
         *
         * Update a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.updateById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::updateById::Product::orderItems"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.orders
     * @header lbServices.Product.orders
     * @object
     * @description
     *
     * The object `Product.orders` groups methods
     * manipulating `Order` instances related to `Product`.
     *
     * Call {@link lbServices.Product#orders Product.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#orders
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries orders of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#count
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Counts orders of Product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#create
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#createMany
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#destroyAll
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#destroyById
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#exists
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Check the existence of orders relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.exists = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::exists::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#findById
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#link
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Add a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.link = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::link::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#unlink
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Remove the orders relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.unlink = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::unlink::Product::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.orders#updateById
         * @methodOf lbServices.Product.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Product::orders"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.PaymentMethod
 * @header lbServices.PaymentMethod
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PaymentMethod` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PaymentMethod",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PaymentMethods/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PaymentMethod.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/PaymentMethods/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use PaymentMethod.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/PaymentMethods/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PaymentMethod.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/PaymentMethods/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PaymentMethod.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/PaymentMethods/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use PaymentMethod.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/PaymentMethods/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use PaymentMethod.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/PaymentMethods/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use PaymentMethod.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/PaymentMethods/:id/orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#create
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PaymentMethods",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#createMany
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/PaymentMethods",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#upsert
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PaymentMethods",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#exists
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/PaymentMethods/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#findById
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PaymentMethods/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#find
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PaymentMethods",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#findOne
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PaymentMethods/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#updateAll
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/PaymentMethods/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#deleteById
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/PaymentMethods/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#count
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/PaymentMethods/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#prototype$updateAttributes
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PaymentMethods/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#createChangeStream
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/PaymentMethods/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Order.paymentMethod() instead.
        "::get::Order::paymentMethod": {
          url: urlBase + "/Orders/:id/paymentMethod",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#updateOrCreate
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#update
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#destroyById
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#removeById
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.PaymentMethod#modelName
    * @propertyOf lbServices.PaymentMethod
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PaymentMethod`.
    */
    R.modelName = "PaymentMethod";

    /**
     * @ngdoc object
     * @name lbServices.PaymentMethod.orders
     * @header lbServices.PaymentMethod.orders
     * @object
     * @description
     *
     * The object `PaymentMethod.orders` groups methods
     * manipulating `Order` instances related to `PaymentMethod`.
     *
     * Call {@link lbServices.PaymentMethod#orders PaymentMethod.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod#orders
         * @methodOf lbServices.PaymentMethod
         *
         * @description
         *
         * Queries orders of PaymentMethod.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod.orders#count
         * @methodOf lbServices.PaymentMethod.orders
         *
         * @description
         *
         * Counts orders of PaymentMethod.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod.orders#create
         * @methodOf lbServices.PaymentMethod.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod.orders#createMany
         * @methodOf lbServices.PaymentMethod.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod.orders#destroyAll
         * @methodOf lbServices.PaymentMethod.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod.orders#destroyById
         * @methodOf lbServices.PaymentMethod.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod.orders#findById
         * @methodOf lbServices.PaymentMethod.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PaymentMethod.orders#updateById
         * @methodOf lbServices.PaymentMethod.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::PaymentMethod::orders"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Currency
 * @header lbServices.Currency
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Currency` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Currency",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Currencies/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Currency.productPrices.findById() instead.
        "prototype$__findById__productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/productPrices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Currency.productPrices.destroyById() instead.
        "prototype$__destroyById__productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/productPrices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.productPrices.updateById() instead.
        "prototype$__updateById__productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/productPrices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Currency.orderItems.findById() instead.
        "prototype$__findById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/orderItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Currency.orderItems.destroyById() instead.
        "prototype$__destroyById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/orderItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.orderItems.updateById() instead.
        "prototype$__updateById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/orderItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Currency.productPrices() instead.
        "prototype$__get__productPrices": {
          isArray: true,
          url: urlBase + "/Currencies/:id/productPrices",
          method: "GET"
        },

        // INTERNAL. Use Currency.productPrices.create() instead.
        "prototype$__create__productPrices": {
          url: urlBase + "/Currencies/:id/productPrices",
          method: "POST"
        },

        // INTERNAL. Use Currency.productPrices.destroyAll() instead.
        "prototype$__delete__productPrices": {
          url: urlBase + "/Currencies/:id/productPrices",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.productPrices.count() instead.
        "prototype$__count__productPrices": {
          url: urlBase + "/Currencies/:id/productPrices/count",
          method: "GET"
        },

        // INTERNAL. Use Currency.orderItems() instead.
        "prototype$__get__orderItems": {
          isArray: true,
          url: urlBase + "/Currencies/:id/orderItems",
          method: "GET"
        },

        // INTERNAL. Use Currency.orderItems.create() instead.
        "prototype$__create__orderItems": {
          url: urlBase + "/Currencies/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Currency.orderItems.destroyAll() instead.
        "prototype$__delete__orderItems": {
          url: urlBase + "/Currencies/:id/orderItems",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.orderItems.count() instead.
        "prototype$__count__orderItems": {
          url: urlBase + "/Currencies/:id/orderItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#create
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Currencies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#createMany
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Currencies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#upsert
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Currencies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#exists
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Currencies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#findById
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Currencies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#find
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Currencies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#findOne
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Currencies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#updateAll
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Currencies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#deleteById
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Currencies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#count
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Currencies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#prototype$updateAttributes
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Currencies/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Currency#createChangeStream
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Currencies/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ProductPrice.currency() instead.
        "::get::ProductPrice::currency": {
          url: urlBase + "/ProductPrices/:id/currency",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Currency#updateOrCreate
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Currency#update
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Currency#destroyById
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Currency#removeById
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Currency#modelName
    * @propertyOf lbServices.Currency
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Currency`.
    */
    R.modelName = "Currency";

    /**
     * @ngdoc object
     * @name lbServices.Currency.productPrices
     * @header lbServices.Currency.productPrices
     * @object
     * @description
     *
     * The object `Currency.productPrices` groups methods
     * manipulating `ProductPrice` instances related to `Currency`.
     *
     * Call {@link lbServices.Currency#productPrices Currency.productPrices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Currency#productPrices
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Queries productPrices of Currency.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::get::Currency::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.productPrices#count
         * @methodOf lbServices.Currency.productPrices
         *
         * @description
         *
         * Counts productPrices of Currency.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.productPrices.count = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::count::Currency::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.productPrices#create
         * @methodOf lbServices.Currency.productPrices
         *
         * @description
         *
         * Creates a new instance in productPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.create = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::create::Currency::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.productPrices#createMany
         * @methodOf lbServices.Currency.productPrices
         *
         * @description
         *
         * Creates a new instance in productPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.createMany = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::createMany::Currency::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.productPrices#destroyAll
         * @methodOf lbServices.Currency.productPrices
         *
         * @description
         *
         * Deletes all productPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.productPrices.destroyAll = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::delete::Currency::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.productPrices#destroyById
         * @methodOf lbServices.Currency.productPrices
         *
         * @description
         *
         * Delete a related item by id for productPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productPrices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.productPrices.destroyById = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::destroyById::Currency::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.productPrices#findById
         * @methodOf lbServices.Currency.productPrices
         *
         * @description
         *
         * Find a related item by id for productPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productPrices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.findById = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::findById::Currency::productPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.productPrices#updateById
         * @methodOf lbServices.Currency.productPrices
         *
         * @description
         *
         * Update a related item by id for productPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for productPrices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R.productPrices.updateById = function() {
          var TargetResource = $injector.get("ProductPrice");
          var action = TargetResource["::updateById::Currency::productPrices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Currency.orderItems
     * @header lbServices.Currency.orderItems
     * @object
     * @description
     *
     * The object `Currency.orderItems` groups methods
     * manipulating `OrderItem` instances related to `Currency`.
     *
     * Call {@link lbServices.Currency#orderItems Currency.orderItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Currency#orderItems
         * @methodOf lbServices.Currency
         *
         * @description
         *
         * Queries orderItems of Currency.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::get::Currency::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.orderItems#count
         * @methodOf lbServices.Currency.orderItems
         *
         * @description
         *
         * Counts orderItems of Currency.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orderItems.count = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::count::Currency::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.orderItems#create
         * @methodOf lbServices.Currency.orderItems
         *
         * @description
         *
         * Creates a new instance in orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.create = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::create::Currency::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.orderItems#createMany
         * @methodOf lbServices.Currency.orderItems
         *
         * @description
         *
         * Creates a new instance in orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.createMany = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::createMany::Currency::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.orderItems#destroyAll
         * @methodOf lbServices.Currency.orderItems
         *
         * @description
         *
         * Deletes all orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderItems.destroyAll = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::delete::Currency::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.orderItems#destroyById
         * @methodOf lbServices.Currency.orderItems
         *
         * @description
         *
         * Delete a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderItems.destroyById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::destroyById::Currency::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.orderItems#findById
         * @methodOf lbServices.Currency.orderItems
         *
         * @description
         *
         * Find a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.findById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::findById::Currency::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Currency.orderItems#updateById
         * @methodOf lbServices.Currency.orderItems
         *
         * @description
         *
         * Update a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.updateById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::updateById::Currency::orderItems"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.OrderGroup
 * @header lbServices.OrderGroup
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OrderGroup` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "OrderGroup",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/OrderGroups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use OrderGroup.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderGroup.customers.findById() instead.
        "prototype$__findById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.customers.destroyById() instead.
        "prototype$__destroyById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.customers.updateById() instead.
        "prototype$__updateById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderGroup.customers.link() instead.
        "prototype$__link__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderGroup.customers.unlink() instead.
        "prototype$__unlink__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.customers.exists() instead.
        "prototype$__exists__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/customers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use OrderGroup.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/OrderGroups/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/OrderGroups/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use OrderGroup.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/OrderGroups/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/OrderGroups/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.customers() instead.
        "prototype$__get__customers": {
          isArray: true,
          url: urlBase + "/OrderGroups/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/OrderGroups/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use OrderGroup.customers.destroyAll() instead.
        "prototype$__delete__customers": {
          url: urlBase + "/OrderGroups/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.customers.count() instead.
        "prototype$__count__customers": {
          url: urlBase + "/OrderGroups/:id/customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#create
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/OrderGroups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#createMany
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/OrderGroups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#upsert
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/OrderGroups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#exists
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/OrderGroups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#findById
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/OrderGroups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#find
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/OrderGroups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#findOne
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/OrderGroups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#updateAll
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/OrderGroups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#deleteById
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/OrderGroups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#count
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/OrderGroups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#prototype$updateAttributes
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/OrderGroups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#createChangeStream
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/OrderGroups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.orderGroups.findById() instead.
        "::findById::Customer::orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orderGroups.destroyById() instead.
        "::destroyById::Customer::orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orderGroups.updateById() instead.
        "::updateById::Customer::orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orderGroups.link() instead.
        "::link::Customer::orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orderGroups.unlink() instead.
        "::unlink::Customer::orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orderGroups.exists() instead.
        "::exists::Customer::orderGroups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orderGroups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Customer.orderGroups() instead.
        "::get::Customer::orderGroups": {
          isArray: true,
          url: urlBase + "/Customers/:id/orderGroups",
          method: "GET"
        },

        // INTERNAL. Use Customer.orderGroups.create() instead.
        "::create::Customer::orderGroups": {
          url: urlBase + "/Customers/:id/orderGroups",
          method: "POST"
        },

        // INTERNAL. Use Customer.orderGroups.createMany() instead.
        "::createMany::Customer::orderGroups": {
          isArray: true,
          url: urlBase + "/Customers/:id/orderGroups",
          method: "POST"
        },

        // INTERNAL. Use Customer.orderGroups.destroyAll() instead.
        "::delete::Customer::orderGroups": {
          url: urlBase + "/Customers/:id/orderGroups",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orderGroups.count() instead.
        "::count::Customer::orderGroups": {
          url: urlBase + "/Customers/:id/orderGroups/count",
          method: "GET"
        },

        // INTERNAL. Use Order.orderGroup() instead.
        "::get::Order::orderGroup": {
          url: urlBase + "/Orders/:id/orderGroup",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#updateOrCreate
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#update
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#destroyById
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#removeById
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.OrderGroup#modelName
    * @propertyOf lbServices.OrderGroup
    * @description
    * The name of the model represented by this $resource,
    * i.e. `OrderGroup`.
    */
    R.modelName = "OrderGroup";

    /**
     * @ngdoc object
     * @name lbServices.OrderGroup.orders
     * @header lbServices.OrderGroup.orders
     * @object
     * @description
     *
     * The object `OrderGroup.orders` groups methods
     * manipulating `Order` instances related to `OrderGroup`.
     *
     * Call {@link lbServices.OrderGroup#orders OrderGroup.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#orders
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Queries orders of OrderGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::OrderGroup::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.orders#count
         * @methodOf lbServices.OrderGroup.orders
         *
         * @description
         *
         * Counts orders of OrderGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::OrderGroup::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.orders#create
         * @methodOf lbServices.OrderGroup.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::OrderGroup::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.orders#createMany
         * @methodOf lbServices.OrderGroup.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::OrderGroup::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.orders#destroyAll
         * @methodOf lbServices.OrderGroup.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::OrderGroup::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.orders#destroyById
         * @methodOf lbServices.OrderGroup.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::OrderGroup::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.orders#findById
         * @methodOf lbServices.OrderGroup.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::OrderGroup::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.orders#updateById
         * @methodOf lbServices.OrderGroup.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::OrderGroup::orders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.OrderGroup.customers
     * @header lbServices.OrderGroup.customers
     * @object
     * @description
     *
     * The object `OrderGroup.customers` groups methods
     * manipulating `Customer` instances related to `OrderGroup`.
     *
     * Call {@link lbServices.OrderGroup#customers OrderGroup.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.OrderGroup#customers
         * @methodOf lbServices.OrderGroup
         *
         * @description
         *
         * Queries customers of OrderGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#count
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Counts customers of OrderGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customers.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#create
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#createMany
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#destroyAll
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Deletes all customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#destroyById
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Delete a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#exists
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Check the existence of customers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.exists = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::exists::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#findById
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Find a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#link
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Add a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.link = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::link::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#unlink
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Remove the customers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.unlink = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::unlink::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderGroup.customers#updateById
         * @methodOf lbServices.OrderGroup.customers
         *
         * @description
         *
         * Update a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::OrderGroup::customers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.OrderMethod
 * @header lbServices.OrderMethod
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OrderMethod` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "OrderMethod",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/OrderMethods/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use OrderMethod.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderMethods/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use OrderMethod.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderMethods/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderMethod.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderMethods/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderMethod.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/OrderMethods/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use OrderMethod.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/OrderMethods/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use OrderMethod.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/OrderMethods/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use OrderMethod.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/OrderMethods/:id/orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#create
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/OrderMethods",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#createMany
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/OrderMethods",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#upsert
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/OrderMethods",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#exists
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/OrderMethods/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#findById
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/OrderMethods/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#find
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/OrderMethods",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#findOne
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/OrderMethods/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#updateAll
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/OrderMethods/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#deleteById
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/OrderMethods/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#count
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/OrderMethods/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#prototype$updateAttributes
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/OrderMethods/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#createChangeStream
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/OrderMethods/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Order.orderMethod() instead.
        "::get::Order::orderMethod": {
          url: urlBase + "/Orders/:id/orderMethod",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#updateOrCreate
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#update
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#destroyById
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#removeById
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.OrderMethod#modelName
    * @propertyOf lbServices.OrderMethod
    * @description
    * The name of the model represented by this $resource,
    * i.e. `OrderMethod`.
    */
    R.modelName = "OrderMethod";

    /**
     * @ngdoc object
     * @name lbServices.OrderMethod.orders
     * @header lbServices.OrderMethod.orders
     * @object
     * @description
     *
     * The object `OrderMethod.orders` groups methods
     * manipulating `Order` instances related to `OrderMethod`.
     *
     * Call {@link lbServices.OrderMethod#orders OrderMethod.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.OrderMethod#orders
         * @methodOf lbServices.OrderMethod
         *
         * @description
         *
         * Queries orders of OrderMethod.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod.orders#count
         * @methodOf lbServices.OrderMethod.orders
         *
         * @description
         *
         * Counts orders of OrderMethod.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod.orders#create
         * @methodOf lbServices.OrderMethod.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod.orders#createMany
         * @methodOf lbServices.OrderMethod.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod.orders#destroyAll
         * @methodOf lbServices.OrderMethod.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod.orders#destroyById
         * @methodOf lbServices.OrderMethod.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod.orders#findById
         * @methodOf lbServices.OrderMethod.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderMethod.orders#updateById
         * @methodOf lbServices.OrderMethod.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::OrderMethod::orders"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Order
 * @header lbServices.Order
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Order` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Order",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Orders/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Order.orderGroup() instead.
        "prototype$__get__orderGroup": {
          url: urlBase + "/Orders/:id/orderGroup",
          method: "GET"
        },

        // INTERNAL. Use Order.orderMethod() instead.
        "prototype$__get__orderMethod": {
          url: urlBase + "/Orders/:id/orderMethod",
          method: "GET"
        },

        // INTERNAL. Use Order.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Orders/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Order.person() instead.
        "prototype$__get__person": {
          url: urlBase + "/Orders/:id/person",
          method: "GET"
        },

        // INTERNAL. Use Order.paymentMethod() instead.
        "prototype$__get__paymentMethod": {
          url: urlBase + "/Orders/:id/paymentMethod",
          method: "GET"
        },

        // INTERNAL. Use Order.orderItems.findById() instead.
        "prototype$__findById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/orderItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Order.orderItems.destroyById() instead.
        "prototype$__destroyById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/orderItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.orderItems.updateById() instead.
        "prototype$__updateById__orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/orderItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.products.findById() instead.
        "prototype$__findById__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/:fk",
          method: "GET"
        },

        // INTERNAL. Use Order.products.destroyById() instead.
        "prototype$__destroyById__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.products.updateById() instead.
        "prototype$__updateById__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.products.link() instead.
        "prototype$__link__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.products.unlink() instead.
        "prototype$__unlink__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.products.exists() instead.
        "prototype$__exists__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/products/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Order.orderItems() instead.
        "prototype$__get__orderItems": {
          isArray: true,
          url: urlBase + "/Orders/:id/orderItems",
          method: "GET"
        },

        // INTERNAL. Use Order.orderItems.create() instead.
        "prototype$__create__orderItems": {
          url: urlBase + "/Orders/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Order.orderItems.destroyAll() instead.
        "prototype$__delete__orderItems": {
          url: urlBase + "/Orders/:id/orderItems",
          method: "DELETE"
        },

        // INTERNAL. Use Order.orderItems.count() instead.
        "prototype$__count__orderItems": {
          url: urlBase + "/Orders/:id/orderItems/count",
          method: "GET"
        },

        // INTERNAL. Use Order.products() instead.
        "prototype$__get__products": {
          isArray: true,
          url: urlBase + "/Orders/:id/products",
          method: "GET"
        },

        // INTERNAL. Use Order.products.create() instead.
        "prototype$__create__products": {
          url: urlBase + "/Orders/:id/products",
          method: "POST"
        },

        // INTERNAL. Use Order.products.destroyAll() instead.
        "prototype$__delete__products": {
          url: urlBase + "/Orders/:id/products",
          method: "DELETE"
        },

        // INTERNAL. Use Order.products.count() instead.
        "prototype$__count__products": {
          url: urlBase + "/Orders/:id/products/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#create
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#createMany
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#upsert
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Orders",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#exists
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Orders/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#findById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Orders/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#find
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#findOne
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Orders/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#updateAll
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Orders/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#deleteById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Orders/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#count
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#prototype$updateAttributes
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Orders/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#createChangeStream
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Orders/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.findById() instead.
        "::findById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.destroyById() instead.
        "::destroyById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.updateById() instead.
        "::updateById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orders() instead.
        "::get::Customer::orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.create() instead.
        "::create::Customer::orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.createMany() instead.
        "::createMany::Customer::orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.destroyAll() instead.
        "::delete::Customer::orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.count() instead.
        "::count::Customer::orders": {
          url: urlBase + "/Customers/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use Person.orders.findById() instead.
        "::findById::Person::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.orders.destroyById() instead.
        "::destroyById::Person::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.orders.updateById() instead.
        "::updateById::Person::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.orders() instead.
        "::get::Person::orders": {
          isArray: true,
          url: urlBase + "/People/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Person.orders.create() instead.
        "::create::Person::orders": {
          url: urlBase + "/People/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Person.orders.createMany() instead.
        "::createMany::Person::orders": {
          isArray: true,
          url: urlBase + "/People/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Person.orders.destroyAll() instead.
        "::delete::Person::orders": {
          url: urlBase + "/People/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Person.orders.count() instead.
        "::count::Person::orders": {
          url: urlBase + "/People/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use Product.orders.findById() instead.
        "::findById::Product::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.orders.destroyById() instead.
        "::destroyById::Product::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orders.updateById() instead.
        "::updateById::Product::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.orders.link() instead.
        "::link::Product::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.orders.unlink() instead.
        "::unlink::Product::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orders.exists() instead.
        "::exists::Product::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orders/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Product.orders() instead.
        "::get::Product::orders": {
          isArray: true,
          url: urlBase + "/Products/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Product.orders.create() instead.
        "::create::Product::orders": {
          url: urlBase + "/Products/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Product.orders.createMany() instead.
        "::createMany::Product::orders": {
          isArray: true,
          url: urlBase + "/Products/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Product.orders.destroyAll() instead.
        "::delete::Product::orders": {
          url: urlBase + "/Products/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orders.count() instead.
        "::count::Product::orders": {
          url: urlBase + "/Products/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use PaymentMethod.orders.findById() instead.
        "::findById::PaymentMethod::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/PaymentMethods/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use PaymentMethod.orders.destroyById() instead.
        "::destroyById::PaymentMethod::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/PaymentMethods/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PaymentMethod.orders.updateById() instead.
        "::updateById::PaymentMethod::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/PaymentMethods/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PaymentMethod.orders() instead.
        "::get::PaymentMethod::orders": {
          isArray: true,
          url: urlBase + "/PaymentMethods/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use PaymentMethod.orders.create() instead.
        "::create::PaymentMethod::orders": {
          url: urlBase + "/PaymentMethods/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use PaymentMethod.orders.createMany() instead.
        "::createMany::PaymentMethod::orders": {
          isArray: true,
          url: urlBase + "/PaymentMethods/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use PaymentMethod.orders.destroyAll() instead.
        "::delete::PaymentMethod::orders": {
          url: urlBase + "/PaymentMethods/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use PaymentMethod.orders.count() instead.
        "::count::PaymentMethod::orders": {
          url: urlBase + "/PaymentMethods/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.orders.findById() instead.
        "::findById::OrderGroup::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.orders.destroyById() instead.
        "::destroyById::OrderGroup::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.orders.updateById() instead.
        "::updateById::OrderGroup::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderGroups/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderGroup.orders() instead.
        "::get::OrderGroup::orders": {
          isArray: true,
          url: urlBase + "/OrderGroups/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use OrderGroup.orders.create() instead.
        "::create::OrderGroup::orders": {
          url: urlBase + "/OrderGroups/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use OrderGroup.orders.createMany() instead.
        "::createMany::OrderGroup::orders": {
          isArray: true,
          url: urlBase + "/OrderGroups/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use OrderGroup.orders.destroyAll() instead.
        "::delete::OrderGroup::orders": {
          url: urlBase + "/OrderGroups/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use OrderGroup.orders.count() instead.
        "::count::OrderGroup::orders": {
          url: urlBase + "/OrderGroups/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use OrderMethod.orders.findById() instead.
        "::findById::OrderMethod::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderMethods/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use OrderMethod.orders.destroyById() instead.
        "::destroyById::OrderMethod::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderMethods/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OrderMethod.orders.updateById() instead.
        "::updateById::OrderMethod::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OrderMethods/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OrderMethod.orders() instead.
        "::get::OrderMethod::orders": {
          isArray: true,
          url: urlBase + "/OrderMethods/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use OrderMethod.orders.create() instead.
        "::create::OrderMethod::orders": {
          url: urlBase + "/OrderMethods/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use OrderMethod.orders.createMany() instead.
        "::createMany::OrderMethod::orders": {
          isArray: true,
          url: urlBase + "/OrderMethods/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use OrderMethod.orders.destroyAll() instead.
        "::delete::OrderMethod::orders": {
          url: urlBase + "/OrderMethods/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use OrderMethod.orders.count() instead.
        "::count::OrderMethod::orders": {
          url: urlBase + "/OrderMethods/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use OrderItem.order() instead.
        "::get::OrderItem::order": {
          url: urlBase + "/OrderItems/:id/order",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Order#updateOrCreate
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Order#update
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Order#destroyById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Order#removeById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Order#modelName
    * @propertyOf lbServices.Order
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Order`.
    */
    R.modelName = "Order";


        /**
         * @ngdoc method
         * @name lbServices.Order#orderGroup
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches belongsTo relation orderGroup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderGroup` object.)
         * </em>
         */
        R.orderGroup = function() {
          var TargetResource = $injector.get("OrderGroup");
          var action = TargetResource["::get::Order::orderGroup"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order#orderMethod
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches belongsTo relation orderMethod.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderMethod` object.)
         * </em>
         */
        R.orderMethod = function() {
          var TargetResource = $injector.get("OrderMethod");
          var action = TargetResource["::get::Order::orderMethod"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order#customer
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Order::customer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order#person
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches belongsTo relation person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::Order::person"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order#paymentMethod
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches belongsTo relation paymentMethod.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PaymentMethod` object.)
         * </em>
         */
        R.paymentMethod = function() {
          var TargetResource = $injector.get("PaymentMethod");
          var action = TargetResource["::get::Order::paymentMethod"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Order.orderItems
     * @header lbServices.Order.orderItems
     * @object
     * @description
     *
     * The object `Order.orderItems` groups methods
     * manipulating `OrderItem` instances related to `Order`.
     *
     * Call {@link lbServices.Order#orderItems Order.orderItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Order#orderItems
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Queries orderItems of Order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::get::Order::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderItems#count
         * @methodOf lbServices.Order.orderItems
         *
         * @description
         *
         * Counts orderItems of Order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orderItems.count = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::count::Order::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderItems#create
         * @methodOf lbServices.Order.orderItems
         *
         * @description
         *
         * Creates a new instance in orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.create = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::create::Order::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderItems#createMany
         * @methodOf lbServices.Order.orderItems
         *
         * @description
         *
         * Creates a new instance in orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.createMany = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::createMany::Order::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderItems#destroyAll
         * @methodOf lbServices.Order.orderItems
         *
         * @description
         *
         * Deletes all orderItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderItems.destroyAll = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::delete::Order::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderItems#destroyById
         * @methodOf lbServices.Order.orderItems
         *
         * @description
         *
         * Delete a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderItems.destroyById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::destroyById::Order::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderItems#findById
         * @methodOf lbServices.Order.orderItems
         *
         * @description
         *
         * Find a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.findById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::findById::Order::orderItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderItems#updateById
         * @methodOf lbServices.Order.orderItems
         *
         * @description
         *
         * Update a related item by id for orderItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orderItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R.orderItems.updateById = function() {
          var TargetResource = $injector.get("OrderItem");
          var action = TargetResource["::updateById::Order::orderItems"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Order.products
     * @header lbServices.Order.products
     * @object
     * @description
     *
     * The object `Order.products` groups methods
     * manipulating `Product` instances related to `Order`.
     *
     * Call {@link lbServices.Order#products Order.products()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Order#products
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Queries products of Order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#count
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Counts products of Order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#create
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Creates a new instance in products of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#createMany
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Creates a new instance in products of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#destroyAll
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Deletes all products of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#destroyById
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Delete a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#exists
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Check the existence of products relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.exists = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::exists::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#findById
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Find a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#link
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Add a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.link = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::link::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#unlink
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Remove the products relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.products.unlink = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::unlink::Order::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.products#updateById
         * @methodOf lbServices.Order.products
         *
         * @description
         *
         * Update a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::Order::products"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ProductPrice
 * @header lbServices.ProductPrice
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductPrice` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ProductPrice",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ProductPrices/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ProductPrice.product() instead.
        "prototype$__get__product": {
          url: urlBase + "/ProductPrices/:id/product",
          method: "GET"
        },

        // INTERNAL. Use ProductPrice.currency() instead.
        "prototype$__get__currency": {
          url: urlBase + "/ProductPrices/:id/currency",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#create
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ProductPrices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#createMany
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ProductPrices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#upsert
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ProductPrices",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#exists
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ProductPrices/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#findById
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ProductPrices/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#find
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ProductPrices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#findOne
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ProductPrices/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#updateAll
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ProductPrices/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#deleteById
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ProductPrices/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#count
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ProductPrices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#prototype$updateAttributes
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ProductPrices/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#createChangeStream
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ProductPrices/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Product.productPrices.findById() instead.
        "::findById::Product::productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productPrices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.productPrices.destroyById() instead.
        "::destroyById::Product::productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productPrices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productPrices.updateById() instead.
        "::updateById::Product::productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productPrices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.productPrices() instead.
        "::get::Product::productPrices": {
          isArray: true,
          url: urlBase + "/Products/:id/productPrices",
          method: "GET"
        },

        // INTERNAL. Use Product.productPrices.create() instead.
        "::create::Product::productPrices": {
          url: urlBase + "/Products/:id/productPrices",
          method: "POST"
        },

        // INTERNAL. Use Product.productPrices.createMany() instead.
        "::createMany::Product::productPrices": {
          isArray: true,
          url: urlBase + "/Products/:id/productPrices",
          method: "POST"
        },

        // INTERNAL. Use Product.productPrices.destroyAll() instead.
        "::delete::Product::productPrices": {
          url: urlBase + "/Products/:id/productPrices",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productPrices.count() instead.
        "::count::Product::productPrices": {
          url: urlBase + "/Products/:id/productPrices/count",
          method: "GET"
        },

        // INTERNAL. Use Currency.productPrices.findById() instead.
        "::findById::Currency::productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/productPrices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Currency.productPrices.destroyById() instead.
        "::destroyById::Currency::productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/productPrices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.productPrices.updateById() instead.
        "::updateById::Currency::productPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/productPrices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Currency.productPrices() instead.
        "::get::Currency::productPrices": {
          isArray: true,
          url: urlBase + "/Currencies/:id/productPrices",
          method: "GET"
        },

        // INTERNAL. Use Currency.productPrices.create() instead.
        "::create::Currency::productPrices": {
          url: urlBase + "/Currencies/:id/productPrices",
          method: "POST"
        },

        // INTERNAL. Use Currency.productPrices.createMany() instead.
        "::createMany::Currency::productPrices": {
          isArray: true,
          url: urlBase + "/Currencies/:id/productPrices",
          method: "POST"
        },

        // INTERNAL. Use Currency.productPrices.destroyAll() instead.
        "::delete::Currency::productPrices": {
          url: urlBase + "/Currencies/:id/productPrices",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.productPrices.count() instead.
        "::count::Currency::productPrices": {
          url: urlBase + "/Currencies/:id/productPrices/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#updateOrCreate
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductPrice` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#update
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#destroyById
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#removeById
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ProductPrice#modelName
    * @propertyOf lbServices.ProductPrice
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ProductPrice`.
    */
    R.modelName = "ProductPrice";


        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#product
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Fetches belongsTo relation product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::ProductPrice::product"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProductPrice#currency
         * @methodOf lbServices.ProductPrice
         *
         * @description
         *
         * Fetches belongsTo relation currency.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R.currency = function() {
          var TargetResource = $injector.get("Currency");
          var action = TargetResource["::get::ProductPrice::currency"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ProductStock
 * @header lbServices.ProductStock
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductStock` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ProductStock",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ProductStocks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ProductStock.product() instead.
        "prototype$__get__product": {
          url: urlBase + "/ProductStocks/:id/product",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#create
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ProductStocks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#createMany
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ProductStocks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#upsert
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ProductStocks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#exists
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ProductStocks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#findById
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ProductStocks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#find
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ProductStocks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#findOne
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ProductStocks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#updateAll
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ProductStocks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#deleteById
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ProductStocks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#count
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ProductStocks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#prototype$updateAttributes
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ProductStocks/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#createChangeStream
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ProductStocks/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Product.productStocks.findById() instead.
        "::findById::Product::productStocks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productStocks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.productStocks.destroyById() instead.
        "::destroyById::Product::productStocks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productStocks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productStocks.updateById() instead.
        "::updateById::Product::productStocks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/productStocks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.productStocks() instead.
        "::get::Product::productStocks": {
          isArray: true,
          url: urlBase + "/Products/:id/productStocks",
          method: "GET"
        },

        // INTERNAL. Use Product.productStocks.create() instead.
        "::create::Product::productStocks": {
          url: urlBase + "/Products/:id/productStocks",
          method: "POST"
        },

        // INTERNAL. Use Product.productStocks.createMany() instead.
        "::createMany::Product::productStocks": {
          isArray: true,
          url: urlBase + "/Products/:id/productStocks",
          method: "POST"
        },

        // INTERNAL. Use Product.productStocks.destroyAll() instead.
        "::delete::Product::productStocks": {
          url: urlBase + "/Products/:id/productStocks",
          method: "DELETE"
        },

        // INTERNAL. Use Product.productStocks.count() instead.
        "::count::Product::productStocks": {
          url: urlBase + "/Products/:id/productStocks/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ProductStock#updateOrCreate
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProductStock` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#update
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#destroyById
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ProductStock#removeById
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ProductStock#modelName
    * @propertyOf lbServices.ProductStock
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ProductStock`.
    */
    R.modelName = "ProductStock";


        /**
         * @ngdoc method
         * @name lbServices.ProductStock#product
         * @methodOf lbServices.ProductStock
         *
         * @description
         *
         * Fetches belongsTo relation product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::ProductStock::product"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.OrderItem
 * @header lbServices.OrderItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OrderItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "OrderItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/OrderItems/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use OrderItem.order() instead.
        "prototype$__get__order": {
          url: urlBase + "/OrderItems/:id/order",
          method: "GET"
        },

        // INTERNAL. Use OrderItem.product() instead.
        "prototype$__get__product": {
          url: urlBase + "/OrderItems/:id/product",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#create
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/OrderItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#createMany
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/OrderItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#upsert
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/OrderItems",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#exists
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/OrderItems/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#findById
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/OrderItems/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#find
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/OrderItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#findOne
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/OrderItems/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#updateAll
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/OrderItems/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#deleteById
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/OrderItems/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#count
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/OrderItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#prototype$updateAttributes
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/OrderItems/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#createChangeStream
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/OrderItems/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Product.orderItems.findById() instead.
        "::findById::Product::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orderItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.orderItems.destroyById() instead.
        "::destroyById::Product::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orderItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orderItems.updateById() instead.
        "::updateById::Product::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Products/:id/orderItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.orderItems() instead.
        "::get::Product::orderItems": {
          isArray: true,
          url: urlBase + "/Products/:id/orderItems",
          method: "GET"
        },

        // INTERNAL. Use Product.orderItems.create() instead.
        "::create::Product::orderItems": {
          url: urlBase + "/Products/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Product.orderItems.createMany() instead.
        "::createMany::Product::orderItems": {
          isArray: true,
          url: urlBase + "/Products/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Product.orderItems.destroyAll() instead.
        "::delete::Product::orderItems": {
          url: urlBase + "/Products/:id/orderItems",
          method: "DELETE"
        },

        // INTERNAL. Use Product.orderItems.count() instead.
        "::count::Product::orderItems": {
          url: urlBase + "/Products/:id/orderItems/count",
          method: "GET"
        },

        // INTERNAL. Use Currency.orderItems.findById() instead.
        "::findById::Currency::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/orderItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Currency.orderItems.destroyById() instead.
        "::destroyById::Currency::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/orderItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.orderItems.updateById() instead.
        "::updateById::Currency::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Currencies/:id/orderItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Currency.orderItems() instead.
        "::get::Currency::orderItems": {
          isArray: true,
          url: urlBase + "/Currencies/:id/orderItems",
          method: "GET"
        },

        // INTERNAL. Use Currency.orderItems.create() instead.
        "::create::Currency::orderItems": {
          url: urlBase + "/Currencies/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Currency.orderItems.createMany() instead.
        "::createMany::Currency::orderItems": {
          isArray: true,
          url: urlBase + "/Currencies/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Currency.orderItems.destroyAll() instead.
        "::delete::Currency::orderItems": {
          url: urlBase + "/Currencies/:id/orderItems",
          method: "DELETE"
        },

        // INTERNAL. Use Currency.orderItems.count() instead.
        "::count::Currency::orderItems": {
          url: urlBase + "/Currencies/:id/orderItems/count",
          method: "GET"
        },

        // INTERNAL. Use Order.orderItems.findById() instead.
        "::findById::Order::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/orderItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Order.orderItems.destroyById() instead.
        "::destroyById::Order::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/orderItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.orderItems.updateById() instead.
        "::updateById::Order::orderItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/orderItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.orderItems() instead.
        "::get::Order::orderItems": {
          isArray: true,
          url: urlBase + "/Orders/:id/orderItems",
          method: "GET"
        },

        // INTERNAL. Use Order.orderItems.create() instead.
        "::create::Order::orderItems": {
          url: urlBase + "/Orders/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Order.orderItems.createMany() instead.
        "::createMany::Order::orderItems": {
          isArray: true,
          url: urlBase + "/Orders/:id/orderItems",
          method: "POST"
        },

        // INTERNAL. Use Order.orderItems.destroyAll() instead.
        "::delete::Order::orderItems": {
          url: urlBase + "/Orders/:id/orderItems",
          method: "DELETE"
        },

        // INTERNAL. Use Order.orderItems.count() instead.
        "::count::Order::orderItems": {
          url: urlBase + "/Orders/:id/orderItems/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.OrderItem#updateOrCreate
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#update
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#destroyById
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#removeById
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.OrderItem#modelName
    * @propertyOf lbServices.OrderItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `OrderItem`.
    */
    R.modelName = "OrderItem";


        /**
         * @ngdoc method
         * @name lbServices.OrderItem#order
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Fetches belongsTo relation order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::OrderItem::order"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OrderItem#product
         * @methodOf lbServices.OrderItem
         *
         * @description
         *
         * Fetches belongsTo relation product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::OrderItem::product"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VACL
 * @header lbServices.VACL
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VACL` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VACL",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VACLs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.VACL#create
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VACLs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#createMany
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VACLs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#upsert
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VACLs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#exists
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VACLs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#findById
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VACLs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#find
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VACLs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#findOne
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VACLs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#updateAll
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/VACLs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#deleteById
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/VACLs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#count
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VACLs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#prototype$updateAttributes
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - ACL id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VACLs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VACL#createChangeStream
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VACLs/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VACL#updateOrCreate
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VACL` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VACL#update
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VACL#destroyById
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VACL#removeById
         * @methodOf lbServices.VACL
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VACL#modelName
    * @propertyOf lbServices.VACL
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VACL`.
    */
    R.modelName = "VACL";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VRoleMapping
 * @header lbServices.VRoleMapping
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VRoleMapping` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VRoleMapping",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VRoleMappings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VRoleMapping.role() instead.
        "prototype$__get__role": {
          url: urlBase + "/VRoleMappings/:id/role",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#create
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VRoleMappings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#createMany
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VRoleMappings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#upsert
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VRoleMappings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#exists
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VRoleMappings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#findById
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VRoleMappings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#find
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VRoleMappings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#findOne
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VRoleMappings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#updateAll
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/VRoleMappings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#deleteById
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/VRoleMappings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#count
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VRoleMappings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#prototype$updateAttributes
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - RoleMapping id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VRoleMappings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#createChangeStream
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VRoleMappings/change-stream",
          method: "POST"
        },

        // INTERNAL. Use VRole.principals.findById() instead.
        "::findById::VRole::principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VRoles/:id/principals/:fk",
          method: "GET"
        },

        // INTERNAL. Use VRole.principals.destroyById() instead.
        "::destroyById::VRole::principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VRoles/:id/principals/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VRole.principals.updateById() instead.
        "::updateById::VRole::principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VRoles/:id/principals/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VRole.principals() instead.
        "::get::VRole::principals": {
          isArray: true,
          url: urlBase + "/VRoles/:id/principals",
          method: "GET"
        },

        // INTERNAL. Use VRole.principals.create() instead.
        "::create::VRole::principals": {
          url: urlBase + "/VRoles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use VRole.principals.createMany() instead.
        "::createMany::VRole::principals": {
          isArray: true,
          url: urlBase + "/VRoles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use VRole.principals.destroyAll() instead.
        "::delete::VRole::principals": {
          url: urlBase + "/VRoles/:id/principals",
          method: "DELETE"
        },

        // INTERNAL. Use VRole.principals.count() instead.
        "::count::VRole::principals": {
          url: urlBase + "/VRoles/:id/principals/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#updateOrCreate
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#update
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#destroyById
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#removeById
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VRoleMapping#modelName
    * @propertyOf lbServices.VRoleMapping
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VRoleMapping`.
    */
    R.modelName = "VRoleMapping";


        /**
         * @ngdoc method
         * @name lbServices.VRoleMapping#role
         * @methodOf lbServices.VRoleMapping
         *
         * @description
         *
         * Fetches belongsTo relation role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - RoleMapping id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        R.role = function() {
          var TargetResource = $injector.get("VRole");
          var action = TargetResource["::get::VRoleMapping::role"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VRole
 * @header lbServices.VRole
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VRole` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VRole",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VRoles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VRole.principals.findById() instead.
        "prototype$__findById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VRoles/:id/principals/:fk",
          method: "GET"
        },

        // INTERNAL. Use VRole.principals.destroyById() instead.
        "prototype$__destroyById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VRoles/:id/principals/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use VRole.principals.updateById() instead.
        "prototype$__updateById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/VRoles/:id/principals/:fk",
          method: "PUT"
        },

        // INTERNAL. Use VRole.principals() instead.
        "prototype$__get__principals": {
          isArray: true,
          url: urlBase + "/VRoles/:id/principals",
          method: "GET"
        },

        // INTERNAL. Use VRole.principals.create() instead.
        "prototype$__create__principals": {
          url: urlBase + "/VRoles/:id/principals",
          method: "POST"
        },

        // INTERNAL. Use VRole.principals.destroyAll() instead.
        "prototype$__delete__principals": {
          url: urlBase + "/VRoles/:id/principals",
          method: "DELETE"
        },

        // INTERNAL. Use VRole.principals.count() instead.
        "prototype$__count__principals": {
          url: urlBase + "/VRoles/:id/principals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#create
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VRoles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#createMany
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VRoles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#upsert
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VRoles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#exists
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VRoles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#findById
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VRoles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#find
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VRoles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#findOne
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VRoles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#updateAll
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/VRoles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#deleteById
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/VRoles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#count
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VRoles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#prototype$updateAttributes
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VRoles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VRole#createChangeStream
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VRoles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use VRoleMapping.role() instead.
        "::get::VRoleMapping::role": {
          url: urlBase + "/VRoleMappings/:id/role",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VRole#updateOrCreate
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRole` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VRole#update
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VRole#destroyById
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VRole#removeById
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VRole#modelName
    * @propertyOf lbServices.VRole
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VRole`.
    */
    R.modelName = "VRole";

    /**
     * @ngdoc object
     * @name lbServices.VRole.principals
     * @header lbServices.VRole.principals
     * @object
     * @description
     *
     * The object `VRole.principals` groups methods
     * manipulating `VRoleMapping` instances related to `VRole`.
     *
     * Call {@link lbServices.VRole#principals VRole.principals()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.VRole#principals
         * @methodOf lbServices.VRole
         *
         * @description
         *
         * Queries principals of VRole.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        R.principals = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::get::VRole::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VRole.principals#count
         * @methodOf lbServices.VRole.principals
         *
         * @description
         *
         * Counts principals of VRole.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.principals.count = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::count::VRole::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VRole.principals#create
         * @methodOf lbServices.VRole.principals
         *
         * @description
         *
         * Creates a new instance in principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        R.principals.create = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::create::VRole::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VRole.principals#createMany
         * @methodOf lbServices.VRole.principals
         *
         * @description
         *
         * Creates a new instance in principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        R.principals.createMany = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::createMany::VRole::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VRole.principals#destroyAll
         * @methodOf lbServices.VRole.principals
         *
         * @description
         *
         * Deletes all principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.principals.destroyAll = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::delete::VRole::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VRole.principals#destroyById
         * @methodOf lbServices.VRole.principals
         *
         * @description
         *
         * Delete a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.principals.destroyById = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::destroyById::VRole::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VRole.principals#findById
         * @methodOf lbServices.VRole.principals
         *
         * @description
         *
         * Find a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        R.principals.findById = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::findById::VRole::principals"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.VRole.principals#updateById
         * @methodOf lbServices.VRole.principals
         *
         * @description
         *
         * Update a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Role id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VRoleMapping` object.)
         * </em>
         */
        R.principals.updateById = function() {
          var TargetResource = $injector.get("VRoleMapping");
          var action = TargetResource["::updateById::VRole::principals"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.VAccessToken
 * @header lbServices.VAccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VAccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "VAccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/VAccessTokens/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use VAccessToken.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/VAccessTokens/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#create
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/VAccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#createMany
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/VAccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#upsert
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/VAccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#exists
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/VAccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#findById
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/VAccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#find
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/VAccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#findOne
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/VAccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#updateAll
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/VAccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#deleteById
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/VAccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#count
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/VAccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#prototype$updateAttributes
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/VAccessTokens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#createChangeStream
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/VAccessTokens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.findById() instead.
        "::findById::Person::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.destroyById() instead.
        "::destroyById::Person::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.updateById() instead.
        "::updateById::Person::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.accessTokens() instead.
        "::get::Person::accessTokens": {
          isArray: true,
          url: urlBase + "/People/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.create() instead.
        "::create::Person::accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.createMany() instead.
        "::createMany::Person::accessTokens": {
          isArray: true,
          url: urlBase + "/People/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.destroyAll() instead.
        "::delete::Person::accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.count() instead.
        "::count::Person::accessTokens": {
          url: urlBase + "/People/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#updateOrCreate
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `VAccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#update
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#destroyById
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#removeById
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.VAccessToken#modelName
    * @propertyOf lbServices.VAccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `VAccessToken`.
    */
    R.modelName = "VAccessToken";


        /**
         * @ngdoc method
         * @name lbServices.VAccessToken#user
         * @methodOf lbServices.VAccessToken
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::VAccessToken::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
