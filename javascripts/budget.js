const data = require('./data');

let newBudget = data.getBudget();
let theBudgetNow = 0;
let progress = 0;

const progressBar = (currentBudget) => {
  const totalBudget = data.getBudget();
  theBudgetNow = currentBudget;
  progress = (theBudgetNow / totalBudget) * 100;
  const percentageBar = Math.floor(progress);
  const actualProgBar = document.getElementById('progBar');
  const percentOfProg = document.getElementById('percentage');
  actualProgBar.style.width = `${progress}%`;
  percentOfProg.innerHTML = `${percentageBar}%`;
};

const quickMathsAdd = (budgetItem) => {
  newBudget += (budgetItem * 1);
  progressBar(newBudget);
  return newBudget;
};

const quickMathsSub = (budgetItem) => {
  newBudget -= (budgetItem * 1);
  progressBar(newBudget);
  return newBudget;
};

document.getElementById('entry').addEventListener('click', () => {
  addItemsToList();
});

const addItemsToList = () => {
  const listItems = document.getElementsByClassName('listItem');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        const checkBoxClicked = e.target.id;
        const elements = data.getElements();

        for (let x = 0; x < elements.length; x++) {
          if (checkBoxClicked === elements[x].id) {
            domStrang(elements[x]);
            quickMathsAdd(elements[x].cost);
          };
        };
      } else {
        const checkBoxClicked = e.target.id;
        const elements = data.getElements();

        for (let x = 0; x < elements.length; x++) {
          if (checkBoxClicked === elements[x].id) {
            document.getElementById('itemPrice').querySelector(`#${e.target.id}`).remove();
            quickMathsSub(elements[x].cost);
          }
        }
      };
    });
  };
};

const domStrang = (object) => {
  const budgetBox = document.getElementById('itemPrice');
  budgetBox.innerHTML += `<div id="${object.id}">${object.name}:&nbsp;<span>$${object.cost}</span></div>`;
};

module.exports = addItemsToList;
