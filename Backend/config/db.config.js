const mongoose = require('mongoose');
// const logger = require('../logger/api.logger');

const connectDB = async () => {
    try {
        const mongoURI = process.env.DB_URI || 'mongodb+srv://rkghanghas999:CxergQ7UaDEqJwFQ@cluster1.voottms.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster1';
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