const express = require('express');
const logger = require('./config/logger');

const app = express();
const NAMESPACE = 'SERVER';

// ===== MIDDLEWARE SETUP ============================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
const sampleRoutes = require('./routes/sample.route');
const apiPrefix = '/api';

app.use(`${apiPrefix}/sample/`, sampleRoutes);

// ===== DATABASE SETUP ============================================================

// ===== SERVER STARTUP ============================================================
app.listen(8080, () => {
    logger.info(NAMESPACE, 'server running on localhost:8080');
});
