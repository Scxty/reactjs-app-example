import React from 'react';

function TodoItem(props) {
    const completeStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" 
            name="todocheck" 
            checked={props.TodoItem.status}
            onChange={(event) => props.handleChange(props.TodoItem.id)}
            />
            <label style={props.TodoItem.status === true ? completeStyle : undefined  } htmlFor="todo">{props.TodoItem.name}</label>
        </div>
    )
}
export default TodoItem