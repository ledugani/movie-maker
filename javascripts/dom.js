const data = require('./data');

const outputDiv = document.getElementById('categories');

const domString = (categories, elements) => {
  let buildDomString = '<h1>Movie Making Budget Planner</h1>';
  categories.forEach((category) => {
    buildDomString += `<div id="${category.id}">`;
    buildDomString +=   `<h3>${category.categoryName}</h3>`;
    elements.forEach((element) => {
      if (element.id === category.id) {
        buildDomString += `<p>${element.name}</p>`;
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
