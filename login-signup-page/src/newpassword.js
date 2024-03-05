import React, { Component } from "react";
import { Link } from "react-router-dom";
class newPassword extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(<><center>
        
        <h2>New Password</h2>
        New Password:<input type='password' name='newpassword'/><br/>
        Confirm Password:<input type='password' name='confirmpassword'/><br/>
        <input type='submit' value="Change Password"/>
        
        <Link to="/login">login</Link>
        </center></>);
    }
}



export default newPassword;