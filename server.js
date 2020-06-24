const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db_config');
const transactions = require('./routes/transactions');

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);



app.listen(PORT, console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.blue.bold));