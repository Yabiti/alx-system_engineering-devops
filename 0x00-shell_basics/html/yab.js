var h1 = document.querySelector('h1');
h1.style.color = "white";
h1.style.border = "3px dashed blue";
h1.style.textAlign = "center";
h1.style.width = "50%";

h1.onclick = function(){
    this.classList.add("highlight");
}