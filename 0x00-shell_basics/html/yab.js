var randomcolor = function(){
    var rvalue = function(){

    }
    return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

var button = document.querySelector('button');
button.onclick = function(){
    this.style.backgroundColor = randomcolor();
}