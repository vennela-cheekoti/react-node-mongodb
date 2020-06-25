var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UNAME: { type: String, required: true },
    PWD: { type: String, required: true },
    CDATE: { type: Date }
});

const Note = mongoose.model('user', userSchema);
