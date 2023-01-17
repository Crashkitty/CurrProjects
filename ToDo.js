// Add event listener to the form
const form = document.querySelector('#todo-form');
form.addEventListener('submit', addTodo);

// Add new todo function
function addTodo(e) {
  e.preventDefault();
  const input = document.querySelector('#todo-input');
  const todo = input.value;
  input.value = '';
 
  // Create new li element
  const li = document.createElement('li');
  li.innerText = todo;
  document.querySelector('#todo-list').appendChild(li);
}
