const todos = [
  { text: "todo 1", completed: true },
  { text: "todo 2", completed: true },
];

const filters = {
  hideCompleted: false,
};

const renderTodo = (todos, filters) => {
  document.querySelector("#todos").innerHTML = "";
  //todos.filter array helper?

  const filteredTodos = todos.filter((todo) => {
    // filter false => true || completed true => false
    //!tanda kebalikan.
    const checkCompletedTodo = !filters.hideCompleted || !todo.completed;

    return checkCompletedTodo;
  });

  console.log(filteredTodos);

  filteredTodos.forEach((todo) => {
    const p = document.createElement("p");
    //p.textContent ?
    p.textContent = todo.text;
    //.appendChild?
    document.querySelector("#todos").appendChild(p);
  });
};

// init awal
renderTodo(todos, filters);

// submit
// change
// onKeyup
// dll

// add todo
document.querySelector("#new-todo").addEventListener("submit", (event) => {
  event.preventDefault();
  // push = menambah array
  // console.log(event)
  // console.log(event.target.elements)
  todos.push({
    text: event.target.elements.todo.value,
    completed: false,
  });

  renderTodo(todos, filters);

  // clear input text
  event.target.elements.todo.value = "";
});

document.querySelector("#hide-completed").addEventListener("change", (event) => {
  filters.hideCompleted = event.target.checked;

  renderTodo(todos, filters);
});
