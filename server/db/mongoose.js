//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = "mongodb+srv://migram:jsrulesall@cluster0.qavb7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));