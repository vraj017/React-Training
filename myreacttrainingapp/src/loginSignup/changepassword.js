import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    const storedUserData = JSON.parse(localStorage.getItem('userdata')) || {};
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
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
        toast.error('Please enter all the fields');
    }
    else if (oldPassword !== storedPassword) {
      toast.error('Old password does not match');
    } else if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password do not match');
    } else {
      // Update the password in localStorage
      const storedUserData = JSON.parse(localStorage.getItem('userdata')) || {};
      storedUserData.password = newPassword;
      localStorage.setItem('userdata', JSON.stringify(storedUserData));

      toast.success('Password changed successfully');
      // Redirect to the home page
      this.setState({ isPasswordChanged: true });
    }
  }

  render() {
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
        <button className="btn btn-primary" onClick={this.handleChangePassword}>Change Password</button>&nbsp;
        <br />
        <Link to="/loginSignup/homepage">Back to Home</Link>
      </center>
    );
  }
}

export default ChangePassword;
