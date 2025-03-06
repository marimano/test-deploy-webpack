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

document.querySelector('.add-btn').addEventListener('click', async () => {
  const newUser = {
    name: 'Jane (' + Date.now() + ')',
    age: 30,
    email: `jjj${Date.now()}@gmail.com`
  };
  const response = await fetch('/user', { 
    method: 'POST', 
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const { id, message } = await response.json();
  console.log(message);
});