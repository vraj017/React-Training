import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from 'react';
// import { ToastContainer } from "react-toastify";
// import { toast } from "react-toastify";

class UserManagement extends Component {
  constructor(props) {
    super(props);

    // Load existing users from LocalStorage on component mount
    this.state = {
      users: JSON.parse(localStorage.getItem('users')) || [],
      name: '',
      gender: '',
      editingIndex: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addUser = () => {

    const { name, gender, users, editingIndex } = this.state;
    if (name === '' && gender === '') {
      alert('Please fill all the fields');
    } else if (editingIndex !== null) {
      // Editing existing user
      users[editingIndex] = { name, gender };
    } else {
      // Adding new user
      users.push({ name, gender });
    }

    // Update LocalStorage and reset form
    localStorage.setItem('users', JSON.stringify(users));
    this.setState({ users, name: '', gender: 'male', editingIndex: null });
  };

  editUser = (index) => {
    const { users } = this.state;
    const { name, gender } = users[index];

    // Set form fields for editing
    this.setState({ name, gender, editingIndex: index });
  };

  deleteUser = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const { users } = this.state;
      users.splice(index, 1);

      // Update LocalStorage and reset form
      localStorage.setItem('users', JSON.stringify(users));
      this.setState({ users, name: '', gender: 'male', editingIndex: null });
    }
  };

  render() {
    const { name, gender, users } = this.state;

    return (
      <div className="container mt-4">
        <h2 className="text-center">User Management</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" required>
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              id="gender"
              className="form-select"
              value={gender}
              onChange={this.handleChange}
              required
            >
              <option value="">--Select any one--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.addUser}>
            {this.state.editingIndex !== null ? 'Update User' : 'Add User'}
          </button>
        </form>
        <br />
        <table className="table table-bordered" style={{ width: '70%', margin: 'auto' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => this.editUser(index)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => this.deleteUser(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserManagement;
