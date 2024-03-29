import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error('User data not found in localStorage');
      return;
    }

    const storedEmail = storedUserData.email;

    if (email === '') {
      toast.error('Please enter email');
    } else if (email !== storedEmail) {
      this.setState({ error: 'Email not match' });
    } else {
      // Use Navigate to redirect to New Password page if email matches
      this.setState({ isEmailMatched: true });
    }
  }

  render() {
    const { isEmailMatched } = this.state;

    // Redirect to the new password page if email matches
    if (isEmailMatched) {
      return <Navigate to="/loginSignup/enternewpass" />;
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <center>
                  <h2>Reset Password</h2>
                  <form onSubmit={this.reset}>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type='text'
                        className="form-control"
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Reset</button>
                  </form>
                  {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
