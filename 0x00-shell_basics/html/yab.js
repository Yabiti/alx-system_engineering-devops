var checkStatus = document.getElementById('checkStatus');

var checkbox = document.getElementById('checkbox');

checkbox.onchange = function(){
    if(this.checked){
    checkStatus.innerHTML = "checked!";
    } else {
        checkStatus.innerHTML = "Not Checked!";
    }
}