var mongoose = require('mongoose')


require('../model/User');

const user = mongoose.model('user');


exports.listusers = () => {
	return user.find();
};


exports.createusers = (data) => {
	const us = new user({
        UNAME: data.uname,
	    PWD:  data.pwd,
	    CDATE: new Date
    });
	return us.save();
};
