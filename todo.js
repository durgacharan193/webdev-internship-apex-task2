function addTask() {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();

  if (value) {
    const li = document.createElement('li');
    li.textContent = value;

    // Create Remove button
    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    btn.className = 'remove-btn';
    btn.style.marginRight = '10px';
    btn.onclick = function () {
      li.remove();
    };

    li.appendChild(btn);
    document.getElementById('taskList').appendChild(li);

    // Clear input field
    input.value = '';
  }
}
