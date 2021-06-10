const express = require('express');
// const logger = require('./config/logger');

const app = express();
const NAMESPACE = 'SERVER';


// ===== MIDDLEWARE SETUP ============================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
const sampleRoutes = require('./routes/sample.route');
const apiPrefix = '/api';

app.use(`${apiPrefix}/sample/`, sampleRoutes);


const user_route = require('./routes/user_route.js');
app.use(user_route)
console.log(user_route)

// ===== DATABASE SETUP ============================================================
const mongoose_stuff = require('./db/mongoose')
const User = require('./models/the_model')

console.log('USER from the_model ===', User)







// ===== SERVER STARTUP ============================================================
app.listen(3000, () => {
    // logger.info(NAMESPACE, 'server running on localhost:3000');
    console.log('ON 3000')
});
