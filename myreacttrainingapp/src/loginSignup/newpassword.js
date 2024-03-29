import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error('Please enter new password and confirm password');
    } else if (newPassword !== confirmPassword) {
      this.setState({ error: "New password and confirm password do not match" });
    } else {
      // Update the password in localStorage
      const storedUserData = JSON.parse(localStorage.getItem("userdata")) || {};
      storedUserData.password = newPassword;
      localStorage.setItem("userdata", JSON.stringify(storedUserData));
  
      // Show success message
      toast.success("Password changed successfully");
  
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">New Password</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>New Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="newPassword"
                      value={this.state.newPassword}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Change Password</button>
                    <Link to="/loginSignup/login" className="btn btn-link">Login</Link>
                  </div>
                </form>
                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPassword;
