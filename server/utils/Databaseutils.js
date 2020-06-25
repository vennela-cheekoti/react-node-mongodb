var mongoose = require('mongoose'),
	config = require('../../config.json');

exports.setUpConnection = async() => {

    //mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
   await mongoose.connect(config.URI, { useUnifiedTopology: true, useNewUrlParser: true } );
    console.log("connected to db!!")

};