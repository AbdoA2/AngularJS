(function() {

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q'];
function MenuDataService($http, $q) {
  var service = this;

  service.getAllCategories = function() {
    return $http({url: 'https://davids-restaurant.herokuapp.com/categories.json'}).then(function(response){
      var deferred = $q.defer();
      if (response.data) {
        deferred.resolve(response.data);
      }
      else {
        deferred.reject({error: 404});
      }
      return deferred.promise;
    });
  }

  service.getItemsForCategory = function(categoryShortName) {
    return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName}).then(function(response){
      var deferred = $q.defer();
      if (response.data) {
        deferred.resolve(response.data.menu_items);
      }
      else {
        deferred.reject({error: 404});
      }
      return deferred.promise;
    });
  }
}

})();
