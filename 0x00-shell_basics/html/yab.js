var yab = document.getElementById('yab');

var textid = document.getElementById('textid');

yab.oninput = function(){
    textid.oninput = this.value;
}

yab.onfocus = function(){
    textid.onfocus = this.value;
}