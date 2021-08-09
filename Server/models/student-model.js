const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema({
    fisrtName:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('posts', studentSchema);