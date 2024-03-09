import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "", // Initialize state to store the user's name
    };
  }

  componentDidMount() {
    // Retrieve user information from localStorage
    const user = JSON.parse(localStorage.getItem("userdata"));

    // Update the component state with the user's name
    if (user && user.name) {
      this.setState({ userName: user.name });
    }
  }

  render() {
    const { userName } = this.state;

    return (
      <>
        <center>
          <h2>Homepage</h2>
          {userName && <p>Hello, {userName}!</p>}
          <Link to="/loginSignup/homepage/changepassword">Change Password</Link>
          <Logout />
        </center>
      </>
    );
  }
}

export default Homepage;
