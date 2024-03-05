import React,{Component} from "react";
import { Link } from "react-router-dom";
class ResetPassword extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    reset(){
        const email = document.querySelector('input[name=email]').value;
            const storedEmail = localStorage.getItem('email');
            if(email === '') {
                alert('Please enter email');
            }
            else if (email === storedEmail) {
                
                alert('Reset email is sent');
            } else {
                alert('Email does not match');
            }
        }

    render(){
        return(<><center>
        <h2>Reset Password</h2>
        Email:<input type='text' name='email'/><br/>
        <button onClick={this.reset.bind(this)}>Login</button>
        <Link to="/enternewpass">New</Link>
        </center></>);
    }
}

export default ResetPassword;