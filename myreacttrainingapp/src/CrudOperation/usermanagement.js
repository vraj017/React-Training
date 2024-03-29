import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserManagement extends Component {
  constructor(props) {
    super(props);

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
    if (name === '' || gender === '') {
      toast.error('Please fill all the fields');
    } else if (editingIndex !== null) {
      users[editingIndex] = { name, gender };
      toast.success('User updated successfully');
    } else {
      users.push({ name, gender });
      toast.success('User added successfully');
    }

    localStorage.setItem('users', JSON.stringify(users));
    this.setState({ users, name: '', gender: 'male', editingIndex: null });
  };

  editUser = (index) => {
    const { users } = this.state;
    const { name, gender } = users[index];
    this.setState({ name, gender, editingIndex: index });
  };

  deleteUser = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const { users } = this.state;
      users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(users));
      this.setState({ users });
      toast.success('User deleted successfully');
    }
  };

  render() {
    const { name, gender, users } = this.state;

    return (
      <div className="container mt-4">
        <h2 className="text-center">User Management</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
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
              <option value="">--Select Any one--</option>
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
