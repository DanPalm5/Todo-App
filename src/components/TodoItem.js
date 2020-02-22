import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = ()=> {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

   

    render() {
        // "destructuring", pulls variables out of state
        const {id, title} = this.props.todo;

        return (
                    // always use double curly brace for inline styling
            <div style ={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this,id)}
                style= {btnStyle}></button>
                </p>
            </div>
        )
    }
}

// Proptypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.array.isRequired,


}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem;
