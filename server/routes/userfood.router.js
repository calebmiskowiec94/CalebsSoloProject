var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var path = require('path');

// Handles Ajax request for user information if user is authenticated
router.get('/', function (req, res) {
    console.log('get /breakfast route');
    // check if logged in

    User.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data);
            res.send(data);
        }
    });
});

router.put('/', function (req, res) {
    console.log('new userfood food to store: ', req.body.days);
var foodToSave=req.body;
    // use model/constructor to make a Mongoose Object
    // var userfoodToSaveToTheCollection = new User(req.body);

if (req.isAuthenticated()) {
    console.log('works here 1')
        var userId = req.user.id;
        // insert into our collection
        User.findByIdAndUpdate(
            { _id: userId },
            { $set: { days : foodToSave } },


            function (err, data) {
                console.log('saved to the collection: ', data);
                if (err) {
                    console.log('save error: ', err);

                    res.sendStatus(500);
                } else {
                    
                    res.sendStatus(201);
                }

            });
    }
});
// router.put('/:id', function (req, res) {
//     var userfoodtosave=req.body;
//     var userfoodId = req.params.id;

//     console.log('new userfood:', req.body.days);
//     User.findByIdAndUpdate(
//         { _id: userfoodId },
//         { $set: { days: req.body.days } },
//         function (err, data) {
//             if (err) {
//                 console.log('update error: ', err);

//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(200);
//             }
//         }
//     )
// });
// router.post('/', function (req, res) {
//     console.log('new person to store: ', req.body);

//     // use model/constructor to make a Mongoose Object
//     var userToSaveToTheCollection = new User(req.body);

//     // insert into our collection
//     userToSaveToTheCollection.save(function (err, data) {
//         console.log('saved to the collection: ', data);
//         if (err) {
//             console.log('save error: ', err);

//             res.sendStatus(500);
//         } else {
//             res.sendStatus(201);

//         }

//     });
// });





// router.put('/:id', function (req, res) {
//     var breakfastfoodId = req.params.id;

//     console.log('new food:', req.body.breakfastfood);
//     Breakfast.findByIdAndUpdate(
//         { _id: breakfastfoodId },
//         { $set: { breakfastfood: req.body.breakfastfood } },
//         function (err, data) {
//             if (err) {
//                 console.log('update error: ', err);

//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(200);
//             }
//         }
//     )
// });
// router.delete('/:id', function (req, res) {
//     Breakfast.findByIdAndRemove(
//         { _id: req.params.id },
//         function (err, data) {
//             if (err) {
//                 console.log('delete error: ', err);

//                 res.sendStatus(500);
//             } else {
//                 res.sendStatus(200);
//             }
//         }
//     );
// });

module.exports = router;