const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    moduleCode:{
        type: String,
        required: true,
    },
    departmentId:{
        type: Schema.Types.ObjectId,
        ref: 'departmentSchema'
    },
    moduleName: {
        type:String,
        required: true,
    },
    yearStudy:{
        type: Number,
        required: true,
    },
    reviewCount:{
        type: Number,
        required: true,
    }
})

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module