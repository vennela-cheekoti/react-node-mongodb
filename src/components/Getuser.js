import React, { Component } from 'react'
import api from '../api/user'

class Getuser extends Component {
    state={
        users: []
    }
    componentDidMount(){
        api.listusers()
        .then(({ data }) =>
            this.setState({
                users: data
            })
        )
        .catch(err =>
            console.log('something went wrong!!')
        );
    }
    handledelete(data){
        //console.log("get user data: ", data);
        const deldata={"id": data._id, "name": data.UNAME}
        api.deleteusers(deldata).then(() =>
        console.log("user deleted")
        )
        .catch(err =>
            console.error(err)
        );
    }
    render() {
        return (
            <div>
                 <h4>Users</h4>
                {this.state.users.map((data,index)=>{
                    return(
                        // (data.UNAME=="vennela" ? 
                        <div>
                            <p>{data.UNAME}</p>
                            <p>{data._id}</p>
                            <button onClick={this.handledelete.bind(this, data)}>delete</button>
                        </div>
                        //: "")
                    )
                })}
            </div>
        )
    }
}


export default Getuser
