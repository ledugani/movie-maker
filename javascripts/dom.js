const data = require('./data');

const outputDiv = document.getElementById('categories');

const domString = (categories, elements) => {
  let buildDomString = '<h1>Movie Making Budget Planner</h1>';
  categories.forEach((category) => {
    buildDomString += `<div id="${category.id}">`;
    buildDomString +=   `<h3>${category.categoryName}</h3>`;
    elements.forEach((element) => {
      if (`${element.categoryId}` === `${category.id}`) {
        buildDomString += `<div>`;
        buildDomString +=   `<input id="${element.id}" type="checkbox">`;
        buildDomString +=   `<label for="${element.id}">${element.name}</label>`;
        buildDomString += `</div>`;
      }
    });
    buildDomString += `</div>`;
  });
  return buildDomString;
};

const printToDom = () => {
  const categoriesArray = data.getCategories();
  const elementsArray = data.getElements();
  outputDiv.innerHTML = domString(categoriesArray, elementsArray);
};

module.exports = printToDom;
