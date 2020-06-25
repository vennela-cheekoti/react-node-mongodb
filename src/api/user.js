


var axios = require('axios');

var config = require('./config.json');


const userapi = {

	listusers() {
        return axios.get(`${config.apiPrefix}/users`);
    },

    createusers(user) {
    	//console.log(`${config.apiPrefix}/n100s`)
        return axios.post(`${config.apiPrefix}/users`, user);
    },    
}


export default userapi;