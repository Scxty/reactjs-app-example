import React from 'react';
import TodoItem from './TodoItem';
import data from './data';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: data
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        // Something
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.status = !todo.status
                }
                return todo
            })
            return {
                todos: updateTodos
            }
        })

    }

    render() {
        const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} TodoItem={item}
            handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                {TodoItems}
            </div>
        )
    }

}

export default App;