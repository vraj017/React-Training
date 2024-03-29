import React from "react";
import { Link } from "react-router-dom";

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <center>
                  <ul style={{ textAlign: "center", paddingInlineStart: "0", fontSize: "22px" }}>
                    <h1><b>Task List of React</b></h1>
                    <hr></hr>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/loginSignup/">Login & Signup Page with Local Storage</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/counterApp">Counter App with Local Storage</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/minicalc">Mini Calculator</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/colorpicker">Colour Picker with Local Storage</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/todoApp">TODO App</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/todoApp/todowithLS">TODO App with Local Storage</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/CrudOperation">User Management with Local Storage</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/APIDemo/fetchDemo">Fetch API Demo</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/APIDemo/axiosdemo">Axios API Demo</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="/APIDemo/AllNews">News Using API</Link>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Link to="APIDemo/SearchNews"> Search News Using API</Link>
                    </li>
                  </ul>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home2;
