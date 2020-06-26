


var axios = require('axios');

var config = require('./config.json');


const userapi = {

	listusers() {
        return axios.get(`${config.apiPrefix}/users`);
    },

    createusers(user) {
        //console.log(`${config.apiPrefix}/n100s`)
        //console.log('api post data: ', user)
        return axios.post(`${config.apiPrefix}/users`, user);
    }, 
    deleteusers(user){
        //console.log('api delete data: ', user)
        return axios.delete(`${config.apiPrefix}/users/:id`,{data: user});
    }   
}


export default userapi;