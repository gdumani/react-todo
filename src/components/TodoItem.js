/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './TodoItem.module.css';

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  handleEditing = () => {
    this.setState({ editing: true });
  }

  handleUdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const { completed, id, title } = todo;
    const { editing } = this.state;

    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className="item">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button type="button" onClick={() => deleteTodoProps(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className="textInput"
          onChange={(e) => { setUpdate(e.target.value, id); }}
          onKeyDown={this.handleUdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
