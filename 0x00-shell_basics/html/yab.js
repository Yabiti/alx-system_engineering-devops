var button = document.querySelector('body');

button.onclick = function(){
    var p = document.createElement('p');
    p.innerHTML = "Checked!";

    var content = document.querySelector('body');
    content.appendChild(p);
}
