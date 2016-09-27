(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.searchTerm = "";
  ctrl.error = false;
  ctrl.foundItems = [];
  ctrl.search = function() {
    if (ctrl.searchTerm != "") {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm.toLowerCase());
      promise.then(function(response){
        ctrl.foundItems = response.found;
        ctrl.error = false;
      }).catch(function(error){
        ctrl.error = true;
        ctrl.foundItems = error.found;
      });
    }
    else {
      ctrl.error = true;
    }
  }

  ctrl.onRemove = function(index){
    ctrl.foundItems.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$q', '$http'];
function MenuSearchService($q, $http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json'}).then(function (result) {
      var deferred = $q.defer();
      // process result and only keep items that match
      var foundItems = [];
      var items = result.data.menu_items;
      for (var i=0; i < items.length; i++){
        if (items[i].description.search(searchTerm) > -1)
          foundItems.push(items[i]);
      }

      // return processed items
      if (foundItems.length > 0)
        deferred.resolve({found: foundItems, message:"Found matching items."});
      else
        deferred.reject({found: foundItems, message:"Nothing Found"});

      return deferred.promise;
    });
  }
}

function foundItems() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      foundItems: "=foundItems",
      onRemove: "&onRemove"
    },
    restrict: 'E'
  };

  return ddo;
}

})();
