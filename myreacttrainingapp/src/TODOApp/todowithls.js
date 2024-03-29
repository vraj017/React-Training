import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

class TodoAppwithLS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      newTask: '',
      editingTask: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      this.setState({
        tasks: updatedTasks,
        newTask: '',
      });
      this.updateLocalStorage(updatedTasks);
      toast.success('Task added successfully');
    } else {
      toast.error('Please enter a task');
    }
  };

  editTask = (index) => {
    this.setState({ editingTask: index, newTask: this.state.tasks[index] });
  };

  saveTask = (index) => {
    const { tasks, newTask } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;

    this.setState({
      tasks: updatedTasks,
      editingTask: null,
      newTask: '',
    });

    this.updateLocalStorage(updatedTasks);
    toast.info('Task updated');
  };

  removeTask = (index) => {
    const { tasks } = this.state;
    const removedTask = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });

    this.updateLocalStorage(updatedTasks);
    toast.error(`Task "${removedTask}" removed`);
  };

  render() {
    const { tasks, newTask, editingTask } = this.state;

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <center>
                  <h1>TODO App</h1>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={newTask}
                      onChange={this.handleInputChange}
                    />
                    <button className="btn btn-primary" onClick={this.addTask}>
                      Add
                    </button>
                  </div>
                  <ul className="list-group">
                    {tasks.map((task, index) => (
                      <li key={index} className="list-group-item">
                        {editingTask === index ? (
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              value={newTask}
                              onChange={this.handleInputChange}
                            />
                            <button className="btn btn-success mx-2" onClick={() => this.saveTask(index)}>
                              <FaEdit /> {/* Edit icon */}
                            </button>
                          </div>
                        ) : (
                          <div>
                            {task}
                            <button className="btn btn-warning mx-2" onClick={() => this.editTask(index)}>
                              <FaEdit /> {/* Edit icon */}
                            </button>
                            <button className="btn btn-danger" onClick={() => this.removeTask(index)}>
                              <FaTrash /> {/* Delete icon */}
                            </button>
                          </div>
                        )}
                      </li>
                    ))}
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

export default TodoAppwithLS;
