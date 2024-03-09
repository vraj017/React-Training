import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      editingTask: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
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
  };

  removeTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
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

export default TodoApp;
