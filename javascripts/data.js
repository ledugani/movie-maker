let categories = [];
let elements = [];

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

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
};
