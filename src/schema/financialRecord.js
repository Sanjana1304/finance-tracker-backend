const mongoose = require('mongoose');

const financialRecordSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    desc:{
        type:String,
        required:true,
    },
    amt:{
        type:String,
        required:true,
    },
    catg:{
        type:String,
        required:true,
    },
    paym:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default: Date.now,
    }
})

const financialRecordModel = mongoose.model('financialRecordModel',financialRecordSchema);

module.exports = financialRecordModel;