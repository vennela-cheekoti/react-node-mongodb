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
    render() {
        return (
            <div>
                 <h4>Users</h4>
                {this.state.users.map((data,index)=>{
                    return(
                        (data.UNAME=="vennela" ? 
                        <div>
                            <p>{data.UNAME}</p>
                        </div>: "")
                    )
                })}
            </div>
        )
    }
}


export default Getuser
