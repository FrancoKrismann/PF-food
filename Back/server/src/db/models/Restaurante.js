const mongoose = require("mongoose");

const restaurantScheme = new mongoose.Schema({
    name:{
        type: String
    },
    type_customer:{
        type: String
    },
    description:{
        type: String
    },
    addres:{
        type: String
    },
    menu:[{type: mongoose.Schema.Types.ObjectId, ref:'Tables', autopopulate: true}],

    tables:[{type: mongoose.Schema.Types.ObjectId, ref:'Posts', autopopulate: true}]
});

restaurantScheme.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Restaurants', restaurantScheme);