myApp.service('UserfoodService', ['$http', function ($http) {
    var self = this;
    self.userfood = { list: [] };
    console.log('userfood serrvice');


    self.addUserfood = function (userfood) {
        console.log('going to send this object to the server: ', userfood);
        $http.put('/userfood', userfood).then(function (response) {
            console.log('service post response: ', response);
            self.getUserfood();
        
        });
    };
 
}]);

