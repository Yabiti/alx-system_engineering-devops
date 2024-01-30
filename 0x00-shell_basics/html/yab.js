var button = document.querySelector('button');

button.onclick = function(){
    var  p = document.createElement('p');
    p.innerHTML = "clicked!";

    var content = document.querySelector('body');
    content.appendChild(p);
}