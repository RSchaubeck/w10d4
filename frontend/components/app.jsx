import React from "react";
import TodoListContainer from './todos/todo_list_container';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <>
                <h1>Todo List</h1>
                <TodoListContainer />
            </>
            
        )
    }
}

export default App;