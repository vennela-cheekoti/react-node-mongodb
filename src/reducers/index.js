import api from '../api/user'


const userReducer = (state = {users: []}, action) => {
	switch(action.type){
		case "ADD_USER_DATA":
            api.createusers(action.payload).then(() =>
                console.log("user added")
            )
            .catch(err =>
                console.error(err)
            );
		return;
        break;
        default:
        return state;
    }
}
export default userReducer;