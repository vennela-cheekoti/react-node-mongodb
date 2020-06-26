import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {newUser} from '../actions/index'
import api from '../api/user'

 class Adduser extends Component {
    state={
        user: {
        uname: "",
        pwd: ""}
      }
      handleChange(arg, event){
          this.state.user[arg]=event.target.value
          this.setState({
              user: this.state.user
          })
      }
      addData(){
        api.createusers(this.state.user).then(() =>
        console.log("user added")
        )
        .catch(err =>
            console.error(err)
        );
        //this.props.newUser(this.state.user); //using redux store
      }
    render() {
        return (
            <div>
                <input type="text" placeholder="enter username" onChange={this.handleChange.bind(this,"uname")}></input>
                <input type="text" placeholder="enter password" onChange={this.handleChange.bind(this,"pwd")}></input>
                <button onClick={this.addData.bind(this)}>Add</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        //productsData: state.productListDetails.products
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({newUser: newUser}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Adduser)

