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

  if (!inputsAreValid(user, score)) {
    return view.notify('danger', 'Please provide valid details!');
  }

  view.setIsLoading(true, 'submit');
  const msg = await api.createScore(user, +score);
  view.clearInputs();
  view.setIsLoading(false, 'submit');
  return view.notify('success', msg);
};

const updateScores = async () => {
  view.setIsLoading(true, 'refresh');
  scores = await api.fetchScores();
  view.renderScores(scores);
  view.setIsLoading(false, 'refresh');
  view.notify('success', 'Data updated successfully');
};

refreshScoresBtn.addEventListener('click', updateScores);

newScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  scoreSubmitHandler();
});
