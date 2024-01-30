var button = document.querySelector('button');

button.onmouseenter = function(){
    this.innerHTML = "mouseentered!";

button.ondblclick = function(){
    this.innerHTML = "doubleclicked!";

button.onmouseleave = function(){
    this.innerHTML = "mouse left!";
}
}
}
