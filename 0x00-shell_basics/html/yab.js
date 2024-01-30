var randomColor = function(){
    var rvalue = function(){
        return Math.round(Math.random()*255);
    }
    return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

var button = document.querySelector('button');

button.onclick = function(){
    this.style.backgroundColor = randomColor();
}