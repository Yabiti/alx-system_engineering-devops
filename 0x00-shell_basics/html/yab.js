// write your code here
var todoList = document.getElementById('todoList');
var additems = document.getElementById('addTodo');
additems.onclick = function(){
    var todo_obj = document.getElementById("todo").value;
    
    if (todo_obj !== ""){

        var li = document.createElement('li');
        li.innerHTML = todo_obj;
        todoList.appendChild(li);
        document.getElementById("todo").value = "";

    }
}
