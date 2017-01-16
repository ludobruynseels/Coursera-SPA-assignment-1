(function () {
'use strict';

angular.module('lunchChecker', [])
.controller('lunchCheckerController', lunchCheckerController);

lunchCheckerController.$inject = ['$scope'];
function lunchCheckerController($scope, $filter) {
    $scope.lunchItemList = '';

  $scope.EvaluateMenu =  function ()
  {
      if (!$scope.lunchItemList) {
        $scope.message = 'Please enter data first';
      return;
  }
      var s = $scope.lunchItemList || '';

      var items = s.split(",");
      var numItems = items.length;

      switch (numItems) {
          case 1:
          case 2:
          case 3:
              $scope.message = "Enjoy!";
              break;
          default:
              $scope.message = "Too much!";
      }
  };
  };

})();
