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
        console.log('Lenght = ' + items.length);

      var counter = 0;
      while ( items.length > 0)
      {
          var s = items.pop();
          if (s.length > 0) {
              counter++;
              console.log('counter = ' + counter + ' Value = ' + s);
          }
      }

      switch (counter) {
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
