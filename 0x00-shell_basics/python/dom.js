var headings = document.getElementsByTagName('h1');
var paragraphs = document.getElementsByTagName('p');

for(var i = 0; i < headings.length; i++){
    headings[i].style.color = "green";
}

for(var i = 0; i <paragraphs.length; i++){
    paragraphs[i].style.color = "blue";
}