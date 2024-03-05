import React, { Component } from "react";
import { Link,Navigate } from "react-router-dom";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    const storedUserData = JSON.parse(localStorage.getItem('userdata')) || {};
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      isPasswordChanged: false,
      storedPassword: storedUserData.password || "", // Retrieve stored password
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleChangePassword() {
    const { oldPassword, newPassword, confirmPassword, storedPassword } = this.state;
    if(oldPassword === '' || newPassword === '' || confirmPassword === '') {
        alert('Please enter all the fields');
    }
    else if (oldPassword !== storedPassword) {
      alert('Old password does not match');
    } else if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
    } else {
      // Update the password in localStorage
      // Assuming you have storedUserData in the local storage
      const storedUserData = JSON.parse(localStorage.getItem('userdata')) || {};
      storedUserData.password = newPassword;
      localStorage.setItem('userdata', JSON.stringify(storedUserData));

      alert('Password changed successfully');
      // Redirect to the home page
      this.setState({ isPasswordChanged: true });
    }
  }

  render() {
    const { isPasswordChanged } = this.state;

    // Redirect to the new password page if email matches
    if (isPasswordChanged) {
      return <Navigate to="/homepage" />;
    }
    return (
      <center>
        <h2>Change Password</h2>
        Old Password:
        <input
          type='password'
          name='oldPassword'
          value={this.state.oldPassword}
          onChange={this.handleInputChange}
        /><br />
        New Password:
        <input
          type='password'
          name='newPassword'
          value={this.state.newPassword}
          onChange={this.handleInputChange}
        /><br />
        Confirm Password:
        <input
          type='password'
          name='confirmPassword'
          value={this.state.confirmPassword}
          onChange={this.handleInputChange}
        /><br />
        <input type='button' value="Change Password" onClick={this.handleChangePassword} />&nbsp;
        <br />
        <Link to="/homepage">Back to Home</Link>
      </center>
    );
  }
}

export default ChangePassword;
