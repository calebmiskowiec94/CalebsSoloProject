myApp.controller('UserController', ['UserService', 'CalendarService', 'UserfoodService', 'FoodtypeService', function (UserService, CalendarService, UserfoodService, FoodtypeService) {
  console.log('UserController created');
  var vm = this;
  vm.userObject = UserService.userObject;
  vm.dates = CalendarService.dates;
  vm.foodtypes = FoodtypeService.foodtypes;

  vm.saveUserDays = function (userDays) {
    console.log(userDays);
    UserfoodService.addUserfood(userDays);
  }

}]);
