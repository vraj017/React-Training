import React, { Component } from 'react';

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
  };

  removeTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });

    this.updateLocalStorage(updatedTasks);
  };

  render() {
    const { tasks, newTask, editingTask } = this.state;

    return (
      <><center>
        <h1>TODO App</h1>

        <div>
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {editingTask === index ? (
                <div>
                  <input type="text" value={newTask} onChange={this.handleInputChange} />
                  <button onClick={() => this.saveTask(index)}>Save</button>
                </div>
              ) : (
                <div>
                  {task}
                  <button onClick={() => this.editTask(index)}>Edit</button>
                  <button onClick={() => this.removeTask(index)}>Remove</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        </center> </>
    );
  }
}

export default TodoAppwithLS;
