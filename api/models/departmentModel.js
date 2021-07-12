const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Module = require('./moduleModel');

const departmentSchema = new Schema({
    dName:{
        type: String,
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    reviewCount: {
        type: Number, 
        required: true
    },
}, {
    timestamps: true,
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;