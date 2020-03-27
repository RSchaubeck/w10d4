import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';
import {receiveTodo} from '../../actions/todo_actions';
import {uniqueId} from '../../util/util';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <>
                <ul>
                    {this.props.todos.map((todo, index) => {
                        // console.log(<TodoListItem todo={todo} key={uniqueId()} />);
                        return <TodoListItem todo={todo} key={setTimeout(uniqueId, 1)} />
                    })}
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </>
        );
    }
}

export default TodoList;
