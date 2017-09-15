myApp.service('BreakfastService', ['$http', function ($http) {
    var self = this;
    self.breakfast = { list: [] };
    console.log('breakfast serrvice');

    self.getBreakfast = function () {
        $http.get('/breakfast').then(function (response) {
            self.breakfast.list = response.data;
            console.log('get response: ', self.gottenBreakfast);
        });
    };
    self.getBreakfast();
    self.addMeal = function (Breakfast) {
        console.log('going to send this object to the server: ', Breakfast);

        $http.post('/breakfast', Breakfast).then(function (response) {
            console.log('service post response: ', response);
            self.getBreakfast();
        });
    };
    // self.addBreakfastToDb();
    self.updateBreakfastFood = function (currentBreakfastFood) {
        console.log('service is going to send this update to the server: ', currentBreakfastFood);
        $http.put('/breakfast/' + currentBreakfastFood._id, currentBreakfastFood).then(function (response) {
            console.log('service update response:', response);
            self.getBreakfast();
        });
    };
    self.deleteBreakfastFood = function (breakfastFoodId) {
        console.log('service to delete id: ', breakfastFoodId);

        $http.delete('/breakfast/' + breakfastFoodId).then(function (response) {
            console.log('service delete response:', response);
            self.getBreakfast();
        });

    }


}]);


