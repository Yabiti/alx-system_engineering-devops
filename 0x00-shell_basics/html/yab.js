var textid = document.getElementById('textid');

var yab = document.getElementById('yab');

yab.oninput = function(){
    textid.innerHTML = this.value;
}