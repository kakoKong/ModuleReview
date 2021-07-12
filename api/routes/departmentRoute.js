const router = require('express').Router();
let Department = require('../models/departmentModel');

router.route('/').get((req, res) => {
    Department.find()
        .then(departments => res.json(departments))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const dName = req.body.dName;
    const description = req.body.description;
    const reviewCount = req.body.reviewCount;

    const newDepartment = new Department({
        dName,
        description,
        reviewCount
    })

    newDepartment.save()
        .then(() => res.json('Department Added'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Department.findById(req.params.id)
        .then(department => res.json(department))
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