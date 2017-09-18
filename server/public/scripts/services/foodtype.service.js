myApp.service('FoodtypeService', ['$http', function ($http) {
    var self = this;
    self.foodtypes = { list: [] };


    self.getFoodtypes = function () {
        $http({
            method: 'GET',
            url: '/foodtype',
        }).then(function (response) {
            console.log(response);
            self.foodtypes.list = response.data;
        });
    };


    self.getFoodtypes();




}]);