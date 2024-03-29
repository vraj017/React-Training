import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    if (localStorage.getItem('userdata')) {
      var a = localStorage.getItem('userdata');
      var Data = JSON.parse(a);
      this.setState({ Name: Data.name });
      this.setState({ Email: Data.email });
      this.setState({ Mobile: Data.mobile });
      this.setState({ Password: Data.password });
    } else {
      this.setState({ m: `Data Not Present` });
    }
  }

  btnSignup(e) {
    e.preventDefault();
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.mobile === '' ||
      this.state.password === ''
    ) {
      toast.error('Please enter all the fields');
    } else {
      var myobj = {
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password
      };
      localStorage.setItem('userdata', JSON.stringify(myobj));
      this.setState({ m: `Data Saved ` });
      toast.success('Data Saved');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.btnSignup.bind(this)}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile No:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobile"
                      onChange={(e) => this.setState({ mobile: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    SignUp
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.getData.bind(this)}
                  >
                    Get
                  </button>
                  <Link to="/loginSignup/login" className="btn btn-link">
                    Login
                  </Link>
                </form>
                <h2>Last Sign Up Details</h2>
                {this.state.m && <p>{this.state.m}</p>}
                <p>Name: {this.state.Name}</p>
                <p>Email id: {this.state.Email}</p>
                <p>Mobile No: {this.state.Mobile}</p>
                <p>Password: {this.state.Password}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
