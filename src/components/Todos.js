import React, { Component }from 'react';
import { TodoItem } from './TodoItem.js';
import PropTypes from 'prop-types';


class Todos extends Component {

    render() {
        // pass the information as a property
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

// define prop types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
