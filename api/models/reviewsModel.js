const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
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
    comments: [reviewSchema.comment],
}, {
    timestamps: true,
})

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews