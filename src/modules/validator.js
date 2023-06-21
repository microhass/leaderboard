const inputsAreValid = (name, score) => {
  if (name === '' || isNaN(+score)) return false;
  return true;
};

export default inputsAreValid;
