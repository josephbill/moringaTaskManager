const router = require('express').Router();
let User = require('../models/user.model');

//route to get the users
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users)) //returning JSON
        .catch(err => res.status(100).json("Error: " + err)) //if error show in json
});

//route adding a user
router.route('/add').post((req,res) => {
    const username = req.body.username;

    //object
    const newUser = new User({
        username
    })


    //save our user
    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(100).json("Error: " + err)) //if error show in json
});

//export
module.exports = router;
