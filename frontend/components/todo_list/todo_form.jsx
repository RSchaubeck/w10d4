import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const target = e.target.parentNode.querySelector("input").value;
        this.props.receiveTodo(target);
        console.log(this);
    }

    render() {
        return(
            <form onSubmit={this.submitForm}>
                <label htmlFor="todo">New Todo:</label>
                <input id="todo" type="text"/>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default TodoForm;