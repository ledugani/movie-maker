const categoriesOutputDiv = document.getElementById('categories');

const domString = (categories) => {
  let buildDomString = 'Movie Making Budget Planner';
  categories.forEach((category) => {
    buildDomString += `<h3>${category.categoryName}</h3>`;
  });
  return buildDomString;
};

const printToDom = (categoriesArray) => {
  categoriesOutputDiv.innerHTML = domString(categoriesArray);
};

module.exports = printToDom;
