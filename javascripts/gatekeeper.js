const loadCategories = require('./categories');
const loadElements = require('./elements');
const categoriesDom = require('./dom');
const data = require('./data');

const categorySuccess = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  categoriesDom(categoriesData);
};

const elementSuccess = function () {
  const elementsData = JSON.parse(this.responseText).categories;
  data.setElements(elementsData);
};

const errorLoading = function () {
  console.error('something is not working right');
};

const initializer = () => {
  loadCategories(categorySuccess, errorLoading);
  loadElements(elementSuccess, errorLoading);
};

module.exports = {
  initializer,
};
