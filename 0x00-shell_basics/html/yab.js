var checkStatus = document.getElementById('checkStatus');

var radio = document.getElementById('radio');

radio.onchange = function(){
    if(this.checked){
        checkStatus.innerHTML = "Checked!";
    } else {
        checkStatus.innerHTML = "Not Checked!";
    }
}