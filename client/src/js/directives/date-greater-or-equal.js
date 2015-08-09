angular.module('app')
  .directive('dateGreaterOrEqual', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, elem, attrs, ctrl) {
        var startDate,
            endDate;

        scope.$watch(attrs.dateGreaterOrEqual, function (newVal, oldVal, scope) {
          startDate = newVal;
          check();
        });

        scope.$watch(attrs.ngModel, function (newVal, oldVal, scope) {
          endDate = newVal;
          if (endDate === null) endDate = new Date(); // if date is null don't validate
          check();
        });

        var check = function () {
          if (typeof startDate === 'undefined' || typeof endDate === 'undefined') {
            return;
          }

          if (!validate(startDate)) {
            startDate = new Date(startDate);
            if (!validate(startDate)) {
              return;
            }
          }

          if (!validate(endDate)) {
            endDate = new Date(endDate);
            if (!validate(endDate)) {
              return;
            }
          }

          if (endDate >= startDate) {
            ctrl.$setValidity('dateGreaterOrEqual', true);
          }
          else {
            ctrl.$setValidity('dateGreaterOrEqual', false);
          }

          return;

        };

        var validate = function (date) {
          if (Object.prototype.toString.call(date) === '[object Date]') {
            if (isNaN(date.getTime())) {
              return false;
            }
            else {
              return true;
            }
          }
          else {
            return false;
          }
        };

      }
    }
  });
