import axios from 'axios';
import url from './urls.js';

export const createScore = async (user, score) => {
  const response = await axios.post(url, {
    user,
    score,
  });
  return response.data.result;
};

export const fetchScores = async () => {
  const response = await axios.get(url);
  return response.data.result;
};
