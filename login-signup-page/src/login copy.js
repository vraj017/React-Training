
import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleLogin () {
        // Retrieve email and password from local storage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Get the values entered in the textboxes
        const enteredEmail = document.getElementById('email').value;
        const enteredPassword = document.getElementById('password').value;

        // Compare the entered values with the stored values
        if (enteredEmail === "" && enteredPassword === "") {
            this.setState({msg:`Please enter email and password`});
        } else if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
            // Login successful
            this.setState({msg:`Login successful`});
        } else {
            // Login failed
            this.setState({msg:`Login Failed`});
        }
    };

    render() {
        return (
            <div>
                <input type="text" id="email" placeholder="Email"onChange={(e)=>this.setState({email:e.target.value})} />
                <input type="password" id="password" placeholder="Password"onChange={(e)=>this.setState({password:e.target.value})} />
                <button onClick={this.handleLogin.bind(this)}>Login</button>
                {this.state.msg}
            </div>
        );
    }
}

export default Login;
