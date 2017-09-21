myApp.controller('UserController', ['UserService', 'CalendarService','UserfoodService','FoodtypeService', function(UserService,CalendarService,UserfoodService,FoodtypeService) {
  console.log('UserController created');
  var vm = this;
  vm.userObject = UserService.userObject;
  vm.UserfoodService = UserfoodService;
  //CalendarService.getCalendar();
  //vm.userService = UserService;
  //vm.userObject = UserService.userObject;
  // vm.calendarService = CalendarService;
  vm.dates = CalendarService.dates;
  vm.foodtypes = FoodtypeService.foodtypes;
  // vm.meals = BreakfastService.breakfast;
  vm.newMeal = {};
  UserfoodService.getUserfood();
  vm.gottenUserfood = UserfoodService.gottenUserfood;
  console.log("new meal is ",vm.newMeal);
  console.log('self is',vm)
  console.log('vm.foodtypes is',vm.foodtypes);
  console.log ('user object...', vm.userObject)
     


  vm.addMeal = function () {
    // have service send this to the server
    console.log('clicked to add new meal');
    console.log('userfoodservice is' ,UserfoodService);
    UserfoodService.addUserfood(vm.newMeal);
  }

  vm.updateBreakfastFood = function (currentBreakfastFood) {
    console.log('hitttt it', "id is ", currentBreakfastFood);

    // currentBreakfastFood.breakfastfood = '';
    BreakfastService.updateBreakfastFood(currentBreakfastFood);
  }
  vm.deleteBreakfastFood = function (breakfastFoodId) {
    console.log('it hit  itttt');
    BreakfastService.deleteBreakfastFood(breakfastFoodId);
  }


}]);
