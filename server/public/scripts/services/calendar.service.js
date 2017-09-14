myApp.service('CalendarService', ['$http', function ($http) {
    var self = this;
    self.dates={list:[]};
    

    self.getDate = function () {
        $http({
            method: 'GET',
            url: '/calendar',
        }).then(function (response) {
            console.log(response);
            self.dates.list=response.data;
        });
    };


self.getDate();




}]);


