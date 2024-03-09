import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      confirmPassword: "",
      error: "",
      isPasswordChanged: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
  
    const { newPassword, confirmPassword } = this.state;
  if(newPassword === '' || confirmPassword === ''){
    alert('Please enter new password and confirm password');
  }
    else if (newPassword !== confirmPassword) {
      this.setState({ error: "New password and confirm password do not match" });
    } else {
      // Update the password in localStorage
      const storedUserData = JSON.parse(localStorage.getItem("userdata")) || {};
      storedUserData.password = newPassword;
      localStorage.setItem("userdata", JSON.stringify(storedUserData));
  
      // Show success message
      alert("Password changed successfully");
  
      // Redirect to the home page or any other desired location
      this.setState({ isPasswordChanged: true });
    }
  }
  

  render() {
    const { isPasswordChanged } = this.state;

    // Redirect to the new password page if email matches
    if (isPasswordChanged) {
      return <Navigate to="/loginSignup/login" />;
    }
    return (
      <center>
        <h2>New Password</h2>
        <form onSubmit={this.handleSubmit}>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={this.state.newPassword}
            onChange={this.handleInputChange}
          /><br />
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
          /><br />
          <input type="submit" value="Change Password" />
          <Link to = "/loginSignup/login">Login</Link>
        </form>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
      </center>
    );
  }
}

export default NewPassword;
