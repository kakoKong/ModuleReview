const router = require('express').Router();
let Module = require('../models/moduleModel');

router.route('/').get((req, res) => {
   Module.find()
        .then(modules => res.json(modules))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const moduleCode = req.body.moduleCode;
    const departmentId = req.body.departmentId;
    const moduleName = req.body.moduleName;
    const yearStudy = req.body.yearStudy;
    const reviewCount = req.body.reviewCount;

    const newModule = new Module({
        moduleCode,
        departmentId,
        moduleName,
        yearStudy,
        reviewCount
    })

    newModule.save()
        .then(() => res.json('Module Added'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//Find Module From Department ID
router.route('/:id').get((req,res) => {
    Module.find({ departmentId: req.params.id })
        .then(modules => res.json(modules))
        .catch(err => res.status(400).json('Error: ' +err));
})

router.route('/mod/:id').get((req,res) => {
    Module.findById(req.params.id)
        .then(modules => res.json(modules))
        .catch(err => res.status(400).json('Error: ' +err));
})

router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted'))
        .catch(err => res.status(400).json('Error: ' +err));
})

router.route('/update/:id').put((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration;
            exercise.date = req.body.date;

            exercise.save()
                .then(() => res.json('Exercise Updated!'))
                .catch(err => res.status(400).json('Error: ' +err));
        })
        .catch(err => res.status(400).json('Error: ' +err));
})


module.exports = router;