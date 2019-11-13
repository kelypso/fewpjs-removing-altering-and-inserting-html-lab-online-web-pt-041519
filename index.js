main = document.querySelector('main');
document.body.removeChild(main);

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'YOUR-NAME is the champion';
document.body.appendChid(newHeader);
