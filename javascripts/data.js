let categories = [];
let elements = [];
let budget = 0;

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getCategories = () => {
  return categories;
};

const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getElements = () => {
  return elements;
};

const setBudget = (newbudget) => {
  budget = newbudget;
};

const getBudget = () => {
  return budget;
};

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
  setBudget,
  getBudget,
};
