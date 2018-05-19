const outputDiv = document.getElementById('budget');
const button = document.getElementById('button');
const checkBoxes = document.getElementsByName('checkbox');

const addEvent = () => {
  button.addEventListener('click', () => {
    const userInput = document.getElementById('entry');
    if (isNaN(userInput.value)) {
      alert(`That's not a number, ya dingus!`);
    } else {
      outputDiv.innerHTML = `$${userInput.value}`;
    }
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].removeAttribute('disabled');
    }
  });
};

module.exports = addEvent;
