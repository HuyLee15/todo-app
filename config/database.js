const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
        });

        console.log('Connect to DB!');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;