import React, { Component } from 'react'
import './TodoItem.module.css'

export class TodoItem extends Component {

  state = { editing: false,}
  
  handleEditing = () => {
    this.setState({ editing: true, })
  }
  
  handleUdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none'
    } else {
      editMode.display = 'none'
    }

    return (
      <li className='item' >
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input 
            type="checkbox" 
            className='checkbox'
            checked={completed}
            onChange={()=> this.props.handleChangeProps(id)} 
          />
            <button onClick={()=> this.props.deleteTodoProps(id)}>
              Delete
            </button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
        </div>
        <input
          type='text' 
          style={editMode} 
          className='textInput'
          onChange={e => {this.props.setUpdate(e.target.value, id)}}
          onKeyDown={this.handleUdatedDone}
        />
      </li>
    )
  }
}

export default TodoItem