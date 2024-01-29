var button = document.querySelector('button');
button.ondblclick = function(event){
    this.innerHTML = "key down: " + event.key;
}