const ul = document.getElementById(main);
main.remove();

const newHeader = document.createElement('h1');
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.id = 'victory';
document.body.appendChild(newHeader);