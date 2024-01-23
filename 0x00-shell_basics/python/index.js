var todoItems = document.querySelectorAll('#todos > li');

for(var i = 0; i < todoItems.length; i++) {
  todoItems[i].innerHTML = "Todo Item #" + (i+1);
}