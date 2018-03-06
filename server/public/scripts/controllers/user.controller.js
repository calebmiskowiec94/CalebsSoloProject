myApp.controller('UserController', ['UserService', 'UserfoodService', function (UserService, UserfoodService) {
  console.log('UserController created');
  var vm = this;
  vm.userObject = UserService.userObject;


  vm.saveUserDays = function (userDays) {
    console.log(userDays);
    UserfoodService.addUserfood(userDays);
  }

  vm.deleteUserDays = function (userDays) {
    console.log(userDays);
    UserfoodService.deleteUserfood(userDays);
  }

}]);
