import {RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions";


const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TODOS:
            const newState = action.todos;
            const newObj = {};
            newState.forEach((el) => {
                newObj[el.id] = el;
            });
            return newObj;
        case RECEIVE_TODO:
            const todo = {[action.todo.id]: action.todo};
            const newStateTwo = Object.assign({}, state, todo);
            return newStateTwo;
        default:
            return state;
    }
};

export default todosReducer;