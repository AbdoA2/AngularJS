(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'MyInfoService', '$state'];
function SignUpController(MenuService, MyInfoService, $state) {
  var $ctrl = this;
  $ctrl.info = {};
  $ctrl.info.firstName = "";
  $ctrl.info.lastName = "";
  $ctrl.info.email="";
  $ctrl.info.phone="";
  $ctrl.info.short_name="";
  $ctrl.validDish = false;

  $ctrl.checkDish = function() {
    MenuService.getDish($ctrl.info.short_name).then(function(response) {
      if (response.status == 200){
        $ctrl.validDish = true;
        $ctrl.info.menuItem = response.data;
      }
      else {
        $ctrl.validDish = false;
      }
    }).catch(function(error){
      $ctrl.validDish = false;
    });
  }

  $ctrl.setInfo = function(){
    MyInfoService.setInfo($ctrl.info);
    $ctrl.saved = true;
  }
}

})();
