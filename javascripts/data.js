const loadCategories = require('./categories');
const printToDom = require('./dom');

let categoriesArray = [];

const categorySuccess = function () {
  categoriesArray = JSON.parse(this.responseText).categories;
  // console.log(categoriesArray);
  printToDom(categoriesArray);
};

const errorLoading = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadCategories(categorySuccess, errorLoading);
};

module.exports = {
  initializer,
};
