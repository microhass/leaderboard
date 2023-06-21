const scoresList = document.querySelector('ul');
const notifier = document.querySelector('.notification');

export const renderScores = (scores) => {
  const scoresMarkup = scores.map(
    ({ user, score }) => `
    <li><span>${user}</span> <span>${score}</span></li>
  `
  ).join('');

  scoresList.innerHTML = scoresMarkup;
};

export const getInputValues = () => {
  const inputUser = document.querySelector('#user').value;
  const inputScore = document.querySelector('#mark').value;

  return { user: inputUser, score: inputScore };
};

export const notify = (type, message) => {
  notifier.textContent = message;
  notifier.style.backgroundColor =
    type === 'danger' ? 'red' : 'green';
  notifier.classList.add('show-notification');
  
  setTimeout(() => {
    notifier.classList.remove('show-notification');
  }, 3000);
};

export const clearInputs = () => {
  document.querySelector('#user').value = '';
  document.querySelector('#mark').value = '';
};
