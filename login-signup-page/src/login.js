
import React, { Component } from 'react';
// import './style.css';
import { Link } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    inputChange=(e)=>{
       
        
    }


    login(){
    // //     const storedEmail = localStorage.getItem('email');
    // //     const storedPassword = localStorage.getItem('password');
    }

    render() {
        // const { email, password, errorMessage } = this.state;
        return (
            <>  <center>
            <h2>Login</h2>
            <div class="inputBox"> 
                Email:<input type='text' name='email' /><br/>
                </div>
                Password:<input type='password' name='password'/><br/>
                
                <button onClick={this.login.bind(this)}>Login</button>
                <div>Don't have account?<Link to = "/signup">Signup</Link></div>
                <div><Link to ="/resetpassword">Forgot Password</Link><br/></div>
                
                </center></>
        );
    }
}

export default Login;
