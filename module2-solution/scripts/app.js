(function () {
'use strict';

angular.module('ShoppingLists', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];

function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
    $scope.items = ShoppingListCheckOffService.getToBuyItems();

    $scope.itemName = "";
    $scope.itemQuantity = "";

    $scope.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };

    $scope.addItem = function () {
      ShoppingListCheckOffService.addItem($scope.itemName, $scope.itemQuantity);
    }
}

function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
    $scope.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [];
  var bought = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuy.push(item);
  };

  service.removeItem = function (itemIndex) {
    bought.push(toBuy[itemIndex]);
    toBuy.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };

  service.addItem("Cookies", 10);
  service.addItem("Fuzzy Water", 5);
  service.addItem("Sugary Drinks", 12);
  service.addItem("Milk", 8);
  service.addItem("Burger", 6);
}

})();
