myApp.controller('UserController', ['UserService', 'CalendarService', function(UserService,CalendarService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  //CalendarService.getCalendar();
  //vm.userService = UserService;
  //vm.userObject = UserService.userObject;
  // vm.calendarService = CalendarService;
  vm.dates = CalendarService.dates;
}]);
