const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')


const UsersScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        type_customer:{
            type: String
        },
        description:{
            type: String
        },
        rating:{
            type: Number
        },
        posts:{
            type:[ mongoose.Schema.Types.ObjectId], ref:'Posts', autopopulate: true, default:[]
        },
        table:{
            type: mongoose.Schema.Types.ObjectId, ref:'Tables', autopopulate: true, default:null
        }
    },
    {
        versionKey: false,
    }
)
UsersScheme.plugin(mongoosePaginate) 
UsersScheme.plugin( require('mongoose-autopopulate') ) 

module.exports = mongoose.model('Users',UsersScheme)