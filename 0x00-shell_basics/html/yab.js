var h1 = document.querySelector('h1');

var input = document.querySelector('input[type=text]');

console.log("Attribute names", input.getAttributeNames());

input.setAttribute('type', "checkbox");