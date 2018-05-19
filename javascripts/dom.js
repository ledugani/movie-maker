const data = require('./data');

const outputDiv = document.getElementById('categories');

const domString = (categories, elements) => {
  let buildDomString = '';
  categories.forEach((category) => {
    buildDomString += `<div id="${category.id}" class="panel col-md-4">`;
    buildDomString +=   `<h3>${category.categoryName}</h3>`;
    elements.forEach((element) => {
      if (`${element.categoryId}` === `${category.id}`) {
        buildDomString += `<div class="listItem">`;
        buildDomString +=   `<input id="${element.id}" type="checkbox" name="checkbox" disabled>`;
        buildDomString +=   `<label for="${element.id}">&nbsp;${element.name}</label>`;
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
