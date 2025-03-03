import './styles.scss';

const messageBlock = document.querySelector('.msg-box');
const usersList = document.querySelector('.users-list');
messageBlock.addEventListener('click', async () => {
  const response = await fetch('/users');
  const users = await response.json();
  const usersItems = users.map(user => {
    const userItem = document.createElement('li');
    userItem.innerHTML = `<div>Name: ${user.name}</div><div>Age: ${user.age}</div>`;
    return userItem;
  });
  usersList.innerHTML = '';
  usersList.append(...usersItems);
});