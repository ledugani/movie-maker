const budgetEvents = require('./budget');
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
      data.setBudget(userInput.value);
    }

    // Removes disabled attribute from checkboxes one at a time
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].removeAttribute('disabled');
    }
  });
};

const bindEvents = () => {
  numberEvent();
  budgetEvents();
};

module.exports = bindEvents;
