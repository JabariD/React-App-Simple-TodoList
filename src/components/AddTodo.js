import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (event) => {
        this.setState({title: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }



    render() {
        const { title } = this.state;

        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input value={title} onChange={this.onChange} type="text" name="title" placeholder="Add Todo..." style={{flex: '10' , padding:'5px'}}></input>
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
