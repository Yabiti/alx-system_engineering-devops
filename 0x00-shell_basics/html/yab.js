var button = document.querySelector('button');

button.onmouseenter = function(){
    this.innerHTML = "mouse entered!";
}

button.ondblclick = function(){
    this.innerHTML = "double clicked!";
}

button.onmouseleave = function(){
    this.innerHTML = "mouse left!";
}