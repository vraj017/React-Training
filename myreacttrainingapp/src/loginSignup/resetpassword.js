import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",  // Initialize email in state
      isEmailMatched: false,
      error: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  reset(event) {
    event.preventDefault(); // Fix typo here

    const { email } = this.state;
    const storedUserData = JSON.parse(localStorage.getItem('userdata'));

    if (!storedUserData) {
      alert('User data not found in localStorage');
      return;
    }

    const storedEmail = storedUserData.email;

    if (email === '') {
      alert('Please enter email');
    }else if (email !== storedEmail) {
      this.setState({ error: 'Email not match' });
    } 
    else if (email === storedEmail) {
      // Use Navigate to redirect to New Password page if email matches
      this.setState({ isEmailMatched: true });
    } else {
      this.setState({ error: 'Email not match' });
    }
  }

  render() {
    const { isEmailMatched } = this.state;

    // Redirect to the new password page if email matches
    if (isEmailMatched) {
      return <Navigate to="/loginSignup/enternewpass" />;
    }

    return (
      <center>
        <h2>Reset Password</h2>
        <form onSubmit={this.reset}>
          Email:<input type='text' name='email' value={this.state.email} onChange={this.handleInputChange} /><br />
          <button type="submit">Reset</button>
          {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        </form>
      </center>
    );
  }
}

export default ResetPassword;
