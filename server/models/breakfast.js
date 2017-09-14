var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Mongoose Schema
var BreakfastfoodsSchema = new Schema({
    breakfastfood: { type: String }
},
    {
        collection: 'breakfast' // specify the collection name
    }

);




module.exports = mongoose.model('Breakfast', BreakfastfoodsSchema);