const categoriesOutputDiv = document.getElementById('categories');

const domString = (categories) => {
  let buildDomString = '<h1>Movie Making Budget Planner</h1>';
  categories.forEach((category) => {
    buildDomString += `<div id="${category.id}">`;
    buildDomString +=   `<h3>${category.categoryName}</h3>`;
    buildDomString += `</div>`;
  });
  return buildDomString;
};

const printToDom = (categoriesArray) => {
  categoriesOutputDiv.innerHTML = domString(categoriesArray);
};

module.exports = printToDom;
