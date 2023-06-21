const scoresList = document.querySelector('ul');
const notifier = document.querySelector('.notification');

const sortScores = (data) => data.sort((a, b) => b.score - a.score);

export const renderScores = (scores) => {
  const sortedScores = sortScores(scores);

  const scoresMarkup = sortedScores
    .map(
      ({ user, score }) => `
    <li><span>${user}</span> <span>${score}</span></li>
  `,
    )
    .join('');

  scoresList.innerHTML = scoresMarkup;
};

export const getInputValues = () => {
  const inputUser = document.querySelector('#user').value;
  const inputScore = document.querySelector('#mark').value;
  return { user: inputUser, score: inputScore };
};

export const notify = (type, message) => {
  notifier.textContent = message;
  notifier.style.backgroundColor = type === 'danger' ? 'red' : 'green';
  notifier.classList.add('show-notification');

  setTimeout(() => {
    notifier.classList.remove('show-notification');
  }, 3000);
};

export const clearInputs = () => {
  document.querySelector('#user').value = '';
  document.querySelector('#mark').value = '';
};

const actionBtns = {
  refresh: {
    id: 'refresh',
    requestText: 'Fetching...',
    defaultText: 'Refresh',
  },
  submit: {
    id: 'submit',
    requestText: 'Sending...',
    defaultText: 'Submit',
  },
};

export const setIsLoading = (isLoading, btn) => {
  const actionBtn = actionBtns[btn];
  const targetBtn = document.getElementById(actionBtn.id);
  if (isLoading) {
    targetBtn.classList.add('is-loading');
    targetBtn.textContent = actionBtn.requestText;
  } else {
    targetBtn.classList.remove('is-loading');
    targetBtn.textContent = actionBtn.defaultText;
  }
};
