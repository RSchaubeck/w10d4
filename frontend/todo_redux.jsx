import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import Root from './components/root';
import {receiveTodo, receiveTodos} from "./actions/todo_actions";


document.addEventListener("DOMContentLoaded", () => {
    // TESTING
    console.log("YO");

    const store = configureStore();
    window.allTodos = allTodos();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    const root = document.getElementById("content");
    ReactDOM.render(<Root store={store}/>, root);
});

// window.addItem = addItem;
//   window.clearAll = clearAll;
//   window.addToCart = addToCart;