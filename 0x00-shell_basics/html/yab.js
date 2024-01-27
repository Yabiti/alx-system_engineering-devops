var trying = document.querySelectorAll('#todos > li');

for(var i = 0; i < trying.length; i++){
    trying[i].innerHTML = "items #" + (i + 1);
}