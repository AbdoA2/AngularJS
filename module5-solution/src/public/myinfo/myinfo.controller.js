(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
  var $ctrl = this;
  if (MyInfoService.info != null) {
    $ctrl.registerd = true;
    $ctrl.info = MyInfoService.getInfo();
  }
  else {
    $ctrl.registerd = false;
  }

}

})();
