var ul = document.createElement('ul');
var li1 = document.createElement('li');
li1.innerHTML = "list one";

var ul = document.createElement('ul');
var li2 = document.createElement('li');
li1.innerHTML = "list two";

var ul = document.createElement('ul');
var li3 = document.createElement('li');
li1.innerHTML = "list three";

var clean = document.querySelector('body');
clean.appendChild(ul);

var clean1 = document.querySelector(ul);
clean1.appendChild(li1);
clean1.appendChild(li2)