import './style.css'

const items = JSON.parse(sessionStorage.getItem('app3-list-items')) || [];
const ul = document.createElement('ul');
items.forEach(item => {
  let li = document.createElement('li')
  li.textContent = item;
  ul.appendChild(li);
});

document.querySelector('#app3').append(ul);
