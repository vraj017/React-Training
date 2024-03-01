import React, { Component } from "react";
import { Link } from "react-router-dom";
class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(<><center>
        
        <h2>Change Password</h2>
        Old Password:<input type='password' name='oldpassword'/><br/>
        New Password:<input type='password' name='newpassword'/><br/>
        Confirm Password:<input type='password' name='confirmpassword'/><br/>
        <input type='submit' value="Change Password"/>
        
        <Link to="/homepage">Back to Home</Link>
        </center></>);
    }
}



export default ChangePassword;