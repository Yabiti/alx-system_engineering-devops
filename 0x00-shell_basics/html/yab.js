var button = document.queryselectory('button');

button.onclick = function(){
    var p = document.createElement('p')
    p.innerHTML = "Clicked!";

    var content = document.querySelector('body');
    content.appendChild(p);
}