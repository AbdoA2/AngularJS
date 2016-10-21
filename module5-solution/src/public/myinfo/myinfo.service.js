(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = [];
function MyInfoService() {
  var service = this;
  service.info = {firstName: "Abdelrahman", lastName: "Abbas", email:"abdelrahman_abbas@outlook.com", phone:"987-789-0987", short_name:"A1"};

  service.setInfo = function(info){
    service.info = info;
  }

  service.getInfo = function(info){
    return service.info;
  }

}



})();
