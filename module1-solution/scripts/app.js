(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunch = "";
  $scope.msg = "";
  $scope.found = 0;
  $scope.once = 0;
  $scope.checkLunch = function() {
    var items = $scope.lunch.split(',');
    var count = 0;
    $scope.once = 1;
    for (var v in items) {
      if (items[v].trim().length > 0) {
        count += 1;
      }
    }
    if (count == 0) {
      $scope.msg = "Please enter data first";
      $scope.found = 0;
    }
    else if (count > 3) {
      $scope.msg = "Too much!";
      $scope.found = 1;
    }
    else {
      $scope.msg = "Enjoy!";
      $scope.found = 1;
    }
  }
}
})();
