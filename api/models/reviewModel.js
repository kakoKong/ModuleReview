const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    moduleId:{
        type: Schema.Types.ObjectId,
        ref: 'moduleSchema'
    },
    performance: {
        overall:{
            type: Number
        },
        exam:{
            type: Number,
            required: true
        },
        coursework:{
            type: Number,
            required: true
        },
        classTest:{
            type: Number,
            required: true
        },
        usefulness:{
            type: Number,
            required: true
        },
        lecture:{
            type: Number,
            required: true
        },
        seminar:{
            type: Number,
            required: true
        },
    },
    predictedMark:{
        type: Number,
        required: true,
    },
    mark:{
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    courseStructure:{
        exam: { type: Number},
        coursework: { type: Number },
        classTest: { type: Number },
        attendance: { type: Number }
    },
}, {
    timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review