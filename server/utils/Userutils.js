var mongoose = require('mongoose')


require('../model/User');

const user = mongoose.model('user');


exports.listusers = () => {
	return user.find();
};


exports.createusers = (data) => {
	//console.log('utils post data: ', data)
	const us = new user({
        UNAME: data.uname,
	    PWD:  data.pwd,
	    CDATE: new Date
    });
	return us.save();
};

exports.deleteusers=(data)=>{
	//console.log("utils data: ", data)
	return user.findById(data.id).deleteOne();

}
