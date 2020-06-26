import React, { Component } from 'react'
import api from '../api/user'

class Getuser extends Component {
    state={
        users: [],
        updateduser: {
            uname: "",
            pwd: ""
        }
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
    handleChange(arg,event){
        this.state.updateduser[arg]=event.target.value
        this.setState({
            updateduser: this.state.updateduser
        })
    }
    handleedit(id){
        const data={"id": id, "uname": this.state.updateduser.uname, "pwd": this.state.updateduser.pwd}
        api.updateusers(data).then(()=>
            console.log("user updated")
        ).catch(err=>
            console.log(err)
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
                            <button onClick={this.handledelete.bind(this, data)}>delete</button>
                            <form>
                                <input type="text" defaultValue={data.UNAME} onChange={this.handleChange.bind(this,"uname")}  className="editableFields"/>
                                <input type="text" defaultValue={data.PWD} onChange={this.handleChange.bind(this,"pwd")} className="editableFields"/>
                                <button onClick={this.handleedit.bind(this, data._id)}>Edit</button>
                            </form> 
                        </div>
                        //: "")
                    )
                })}
            </div>
        )
    }
}


export default Getuser
