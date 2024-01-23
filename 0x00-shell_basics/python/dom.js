var u1 = document.createElement('ul')
var li1 = document.createComment('li');
li1.innerHTML = "unordered list";

var u1 = document.createElement('ul')
var li2 = document.createComment('li');
li2.innerHTML = "unordered list";

var u1 = document.createElement('ul')
var li3 = document.createComment('li');
li3.innerHTML = "unordered list";

var clean = document.querySelector('body');
clean.appendChild(ul);

var clean1 = document.querySelector('ul');
clean1.appendChild('li1');
clean2.appendChild('li2');
clean3.appendChild('li3');