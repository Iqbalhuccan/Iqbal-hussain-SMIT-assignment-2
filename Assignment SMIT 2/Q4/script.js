const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  const list = document.getElementById('myList');
  const listItem = document.createElement('li');
  const text = document.createTextNode('New item');
  listItem.appendChild(text);
  list.appendChild(listItem);
});
