const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://restapi_user:abcd1234@ds013559.mlab.com:13559/restapi-example', { useNewUrlParser: true });
    
    mongoose.connection.on('open', () => {
        console.log('mongodb connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error ', err);
    })
}