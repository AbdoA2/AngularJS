(function (){

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items', '$stateParams'];
function ItemsController(items, $stateParams){
  var ctrl = this;
  ctrl.items = items.data.menu_items;
  ctrl.categoryShortName = $stateParams.categoryShortName;
}

})();
