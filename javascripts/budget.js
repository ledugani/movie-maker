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

  const fluffyDragon = document.getElementById('canimake');
  if (percentageBar < 100) {
    percentOfProg.innerHTML = `${percentageBar}%`;
    actualProgBar.style.width = `${progress}%`;
    actualProgBar.classList.remove('progress-bar-danger');
    fluffyDragon.innerHTML = '';
  } else if (percentageBar === 100) {
    fluffyDragon.innerHTML = "You've reached your budget!";
  } else if (percentageBar > 100) {
    percentOfProg.innerHTML = `100%`;
    actualProgBar.style.width = `100%`;
    fluffyDragon.innerHTML = "Uh-oh, looks like you can't make this movie!";
    actualProgBar.classList.remove('active');
    actualProgBar.classList.remove('progress-bar-striped');
    actualProgBar.classList.add('progress-bar-danger');
  }
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
