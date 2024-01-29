var checkstatus = document.getElementById('checkstatus');
var checkbox = document.getElementById('checkbox');

checkbox.onchange = function(){
    if(this.checked){
        checkstatus.innerHTML = "Checked!";
    }
}