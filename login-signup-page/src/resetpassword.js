import React,{Component} from "react";
class ResetPassword extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(<><center>
        <h2>Reset Password</h2>
        Email:<input type='text' name='email'/><br/>
        <input type='submit' value="Reset Password"/>
        </center></>);
    }
}

export default ResetPassword;