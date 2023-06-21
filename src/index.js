import * as api from './modules/api.js';
import * as view from './modules/view.js';
import inputsAreValid from './modules/validator.js';

import './modules/themer.js';
import './style.css';

const newScoreForm = document.querySelector('form');
const refreshScoresBtn = document.getElementById('refresh');
let scores = [];

const scoreSubmitHandler = async () => {
  const { user, score } = view.getInputValues();

  if (!inputsAreValid(user, score))
    return view.notify('danger', 'Please provide valid details!');

  const msg = await api.createScore(user, +score);
  view.notify('success', msg);
  view.clearInputs();
  return;
};

const updateScores = async () => {
  scores = await api.fetchScores();
  view.renderScores(scores);
  view.notify('success', 'Data updated successfully');
};

refreshScoresBtn.addEventListener('click', updateScores);

newScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  scoreSubmitHandler();
});
