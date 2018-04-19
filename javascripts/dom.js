const categoriesOutputDiv = document.getElementById('categories');

const domString = (categories) => {
  let buildDomString = '<h1>Movie Making Budget Planner</h1>';
  categories.forEach((category) => {
    buildDomString += `<h3>${category.categoryName}</h3>`;
  });
  return buildDomString;
};

const printToDom = (categoriesArray) => {
  categoriesOutputDiv.innerHTML = domString(categoriesArray);
};

module.exports = printToDom;
