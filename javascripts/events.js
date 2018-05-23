const data = require('./data');

const outputDiv = document.getElementById('budget');
const button = document.getElementById('button');
const checkBoxes = document.getElementsByName('checkbox');

const numberEvent = () => {
  button.addEventListener('click', () => {
    const userInput = document.getElementById('entry');
    // Alerts user if the input is not a number
    if (isNaN(userInput.value)) {
      alert(`That's not a number, ya dingus!`);
    } else {
      // assigns the user input as the budget
      outputDiv.innerHTML = `$${userInput.value}`;
    }

    // Removes disabled attribute from checkboxes one at a time
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].removeAttribute('disabled');
    }
  });
};

const grabCheck = (e) => {
  const checkBoxClicked = e.target.id;
  const elements = data.getElements();
  for (let x = 0; x < elements.length; x++) {
    if (checkBoxClicked === elements[x].id) {
      console.log(elements[x].cost);
    };
  };
};

document.getElementById('entry').addEventListener('click', () => {
  addItemsToList();
});

const addItemsToList = () => {
  const listItems = document.getElementsByClassName('listItem');
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].checked = true) {
      listItems[i].addEventListener('click', grabCheck);
    }
  };
};

const bindEvents = () => {
  numberEvent();
};

module.exports = bindEvents;
