myApp.service('UserfoodService', ['$http', function ($http) {
    var self = this;
    self.userfood = { list: [] };
    console.log('userfood serrvice');

    self.getUserfood = function () {
        $http.get('/userfood').then(function (response) {
            console.log(response);
            self.userfood.list = response.data;
            console.log('get response: ', self.gottenUserfood);
        });
    };
    // self.getUserfood();


self.addUserfood = function (userfood) {
    console.log('going to send this object to the server: ', userfood);
    //  userfood = {days:userfood}
     ///redefines userfood as an object, the property food has the value of whatever i pass through function
                 //on server req.body = the whole object
                 //use req.body.days to get userfood
    $http.put('/userfood', userfood).then(function (response) {
        console.log('service post response: ', response);
         self.getUserfood();
    });
};
 
}]);

