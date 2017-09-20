myApp.controller('UserController', ['UserService', 'CalendarService','BreakfastService','FoodtypeService', function(UserService,CalendarService,BreakfastService,FoodtypeService) {
  console.log('UserController created');
  var vm = this;
  vm.userObject = UserService.userObject;
  //CalendarService.getCalendar();
  //vm.userService = UserService;
  //vm.userObject = UserService.userObject;
  // vm.calendarService = CalendarService;
  vm.dates = CalendarService.dates;
  vm.foodtypes = FoodtypeService.foodtypes;
  vm.meals = BreakfastService.breakfast;
  vm.newMeal = {};
  BreakfastService.getBreakfast();
  vm.gottenBreakfast = BreakfastService.gottenBreakfast;
  console.log("new meal is ",vm.newMeal);
  console.log('self is',vm)
  console.log('vm.foodtypes is',vm.foodtypes);
     


  vm.addMeal = function () {
    // have service send this to the server
    console.log('clicked to add new meal');
    BreakfastService.addMeal(vm.newMeal);
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
