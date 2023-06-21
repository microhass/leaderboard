const inputsAreValid = (name, score) => {
  if (name === '' || Number.isNaN(+score)) return false;
  return true;
};

export default inputsAreValid;
