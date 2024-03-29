import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            isLoggedIn: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleLogin(event) {
        event.preventDefault();

        const { email, password } = this.state;
        const storedUser = JSON.parse(localStorage.getItem('userdata'));

        if (email === '' || password === '') {
            toast.error('Please enter email and password');
        } else if (storedUser && email === storedUser.email && password === storedUser.password) {
            this.setState({ error: '', isLoggedIn: true });
        } else {
            toast.error('Invalid username or password');
        }
    }

    render() {
        const { isLoggedIn } = this.state;

        // Redirect to the home page if logged in
        if (isLoggedIn) {
            return <Navigate to="/loginSignup/homepage" />;
        }

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Login</h2>
                                <form onSubmit={this.handleLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <div className="mt-3">
                                        <Link to="/loginSignup/signup">Don't have an account? Sign Up</Link>
                                    </div>
                                    <div>
                                        <Link to="/loginSignup/resetpassword">Forgot Password</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
