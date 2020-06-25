var mongoose = require('mongoose');

exports.setUpConnection = async() => {

    //mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
   await mongoose.connect('mongodb+srv://vennela:cheekoti@cluster0-ljqee.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true } );
    console.log("connected to db!!")

};