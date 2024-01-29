var button = document.querySelector('button');

button.onclick = function(){
    var p = document.querySelector('p');
    p.innerHTML = "Check me out!";

    var content = document.querySelector('body');
    content.appendChild(p);
}