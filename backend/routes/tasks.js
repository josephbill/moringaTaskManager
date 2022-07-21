const router = require('express').Router();
let Task = require('../models/task.model');

//route to get the task activities
router.route('/').get((req,res) => {
    Task.find()
        .then(tasks => res.json(tasks)) //returning JSON
        .catch(err => res.status(100).json("Error: " + err)) //if error show in json
});

//route adding a tasks
router.route('/add').post((req,res) => {
   //
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    //object
    const newTasks = new Task({
        username,
        description,
        duration,
        date
    })


    //save our user
    newTasks.save()
        .then(() => res.json('Task added'))
        .catch(err => res.status(100).json("Error: " + err)) //if error show in json
});

//route to fetch a specific task.
router.route('/:id').get((req,res) => {
    Task.findById(req.params.id)
        .then(tasks => res.json(tasks))
        .catch(err => res.status(100).json("Error: " + err)) //if error show in json
})


//delete route
router.route('/:id').delete((req,res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(tasks => res.json(tasks))
        .catch(err => res.status(100).json("Error: " + err)) //if error show in json
})

//update a record
router.route('/update/:id').post((req,res) => {
    Task.findById(req.params.id)
        .then(tasks => {
            tasks.username = req.body.username;
            tasks.description = req.body.description;
            tasks.duration = Number(req.body.duration);
            tasks.date = Date.parse(req.body.date);

            tasks.save()
                .then(() => res.json('Task updated'))
                .catch(err => res.status(100).json("Error: " + err)) //if error show in json

        })
})

//export
module.exports = router;









































