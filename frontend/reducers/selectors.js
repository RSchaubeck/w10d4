const allTodos = (state) => {
    let arr = [];
    // console.log(state.todos);
    Object.keys(state.todos).forEach((el) => {
        // console.log(el);
        arr.push(state.todos[el]);
    })
    // state.todos.forEach(element => {
    //     console.log(element);
    //     arr.push(element);
    // });
    // console.log(arr);
    // console.log(state);
    return arr;
}

export default allTodos;