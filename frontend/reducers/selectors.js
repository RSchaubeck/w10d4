const allTodos = (state) => {
    let arr = [];
    Object.keys(state.todos).forEach((el) => {
        arr.push(el.id);
    })
    return arr;
}

export default allTodos;