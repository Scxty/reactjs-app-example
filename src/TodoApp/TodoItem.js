import React from 'react';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" 
            name="todocheck" 
            checked={props.TodoItem.status}
            onChange={(event) => props.handleChange(props.TodoItem.id)}
            />
            <label htmlFor="todo">{props.TodoItem.name}</label>
        </div>
    )
}
export default TodoItem