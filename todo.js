document.getElementById('todoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('todoInput');
  const value = input.value.trim();
  if (value) {
    addTodo(value);
    input.value = '';
  }
});

function addTodo(task) {
  const li = document.createElement('li');
  li.textContent = task;
  const btn = document.createElement('button');
  btn.textContent = 'Remove';
  btn.className = 'remove-btn';
  btn.onclick = function() {
    li.remove();
  };
  li.appendChild(btn);
  document.getElementById('todoList').appendChild(li);
}