(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = [];
function MyInfoService() {
  var service = this;
  service.info = null;

  service.setInfo = function(info){
    service.info = info;
  }

  service.getInfo = function(info){
    return service.info;
  }

}



})();
