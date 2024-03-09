import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLogin = () => {
        // Handle your login logic here
        // If login is successful, set isLoggedIn state to true
        this.setState({ isLoggedIn: true });
    }

    render() {
        if (this.state.isLoggedIn) {
            // Redirect to a specific route if user is logged in
            return <Redirect to="/dashboard" />
        }

        return (
            <div>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default Login;