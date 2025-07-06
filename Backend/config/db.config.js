const mongoose = require('mongoose');
// const logger = require('../logger/api.logger');

const connectDB = async () => {
    try {
        const mongoURI = process.env.DB_URI;
        if (!mongoURI) {
            throw new Error('DB_URI environment variable is required');
        }
        await mongoose.connect(mongoURI)
         console.log('DB Connected Successfully...')
     } catch (error) {
         console.log(error)
         console.log('Error In Connection, Please Retry')
     }
}

module.exports = {
    connectDB
}