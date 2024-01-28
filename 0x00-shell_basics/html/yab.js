var h1 = document.querySelector('h1');
var input = document.querySelector('input[type=text]');

input.setAttribute('type', 'checkbox');
input.removeAttribute('placeholder');

console.log(input.getAttributeNames());