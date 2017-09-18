var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Mongoose Schema
var FoodtypeSchema = new Schema({
    foodtype: { type: String }
},
    {
        collection: 'foodtype' // specify the collection name
    }

);




module.exports = mongoose.model('Foodtype', FoodtypeSchema);