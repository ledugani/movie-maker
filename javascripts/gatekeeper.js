const loadCategories = require('./categories');
const loadElements = require('./elements');
const printToDom = require('./dom');
const bindEvents = require('./events');
const data = require('./data');

const categorySuccess = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
};

const elementSuccess = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  data.setElements(elementsData);
  printToDom();
};

const errorLoading = function () {
  console.error('something is not working right');
};

const initializer = () => {
  loadCategories(categorySuccess, errorLoading);
  loadElements(elementSuccess, errorLoading);
  bindEvents();
};

module.exports = {
  initializer,
};
