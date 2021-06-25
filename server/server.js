const express = require('express');
const logger = require('./config/logger');
var cors = require('cors')
 


const app = express();
const NAMESPACE = 'SERVER';

// ===== MIDDLEWARE SETUP ============================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
// api routes
const sampleRoutes = require('./routes/sample.route');
const apiPrefix = '/api';

app.use(`${apiPrefix}/sample/`, sampleRoutes);

// ===== DATABASE SETUP ============================================================
const mongoose_stuff = require('./db/mongoose')
const Basic_user_model = require('./models/the_model')



        // MONGODB ATLAS & GMAIL DETAILS ==================================================
        //migarmcodesydney@gmail.com --> gmail to create MongoDB Atlas account
        //dbmongo#1234 --> pword for Gmail account
        //jsrulesall# --> pword for MongoDB Atlas account


// The front end was set up as http://localhost:8080/signup
app.post('/signup', (req, res)=>{
    console.log(req.body)

    const information = new Basic_user_model({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
        service_provider: req.body.service_provider,
    })

    information.save().then(a=>{console.log(a)}).catch(a=>{console.log(a)})
    res.send({response: 'it is working'})
})

app.post('/login', async (req, res)=>{
    console.log(req.body);

    const user = await Basic_user_model.find({
        email: req.body.email,
        password: req.body.password
    })

    

    if(user.length == 1){
        res.send({response:user})
    }else{
        res.send({response:'error'})
    }

})






// ===== SERVER STARTUP ============================================================
app.listen(8080, () => {
    logger.info(NAMESPACE, 'server running on localhost:8080');
});