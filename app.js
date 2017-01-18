(function () {
'use strict';

angular.module('lunchChecker', [])
.controller('lunchCheckerController', lunchCheckerController);

function lunchCheckerController() {
    var vm = this;
    vm.lunchItemList = '';
    vm.message = '';

  vm.EvaluateMenu =  function ()
  {

      if (!vm.lunchItemList) {
        vm.message = 'Please enter data first';
      return;
  }

      var s = vm.lunchItemList || '';

      var items = s.split(",");
      var numItems = items.length;

      switch (numItems) {
          case 1:
          case 2:
          case 3:
              vm.message = "Enjoy!";
              break;
          default:
              vm.message = "Too much!";
      }
  };
  };

})();
