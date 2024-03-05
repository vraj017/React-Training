
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };

    // Bind methods to the instance
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

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('userdata'));

    // Check if the entered credentials match the stored data
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      // Successful login
      this.setState({ error: '' });
      alert('Login successful!');
      // You can redirect to another page or set an authentication state here
    } else {
      // Failed login
      this.setState({ error: 'Invalid username or password' });
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
      </div>
    );
  }
}

export default Login;
