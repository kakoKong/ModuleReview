const router = require('express').Router();
let Review = require('../models/reviewModel');

function findOverall(exam, cw, ct, useful, lect, sem){
    overall = ((exam + cw + ct + useful + lect + sem)/6);
    return overall
}

router.route('/').get((req, res) => {
    Review.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/add').post((req, res) => {
    const moduleId = req.body.moduleId;
    const performance = req.body.performance;
    const predictedMark = req.body.predictedMark;
    const mark = req.body.mark;
    const comment = req.body.comment;

    const newReview = new Review({
        moduleId,
        performance,
        predictedMark,
        mark, 
        comment
    })

    newReview.save()
        .then(() => res.json('Review Added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req,res) => {
    Review.find({ moduleId : req.params.id })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json('Error: ' +err));
})

module.exports = router;