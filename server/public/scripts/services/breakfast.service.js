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


}]);


