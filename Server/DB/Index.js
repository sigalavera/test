const mongoose = require('mongoose');

const DBConnectionString = process.env.CONNECTION_URL;

mongoose.connect(DBConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongoose connect"))
    .catch((error) => { console.log("Mongoose error", error.massage) })

module.exports = mongoose.connection;