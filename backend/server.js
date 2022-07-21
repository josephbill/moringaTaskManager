//requiring the mandatory dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //giving access to the .env file
//config of port server should run on
const app = express() // api routing
const port = process.env.PORT || 5000

//allow cors
app.use(cors());
app.use(express.json()); //allowing app to receive and return data as JSON

//requiring mongo uri
const uri = process.env.ATLAS_URI;
//connect to mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//flags that are required for mongo updates

//create the actual connection
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("Mongo db connected successfully")
})


//informing the server to use the route files
const taskRouter = require('./routes/tasks');
const userRouter = require('./routes/users');


//use the files
app.use('/tasks', taskRouter);
app.use('/users', userRouter);


//when app is running let me know via a msg on the console
app.listen(port,() => {
    console.log(`Server is running on port: ${port}`)
})

//start the server : nodemon server.js


















