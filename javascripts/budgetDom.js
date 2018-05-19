const outputDiv = document.getElementById('budget');
const button = document.getElementById('button');

const addEvent = () => {
  button.addEventListener('click', () => {
    const userInput = document.getElementById('entry');
    if (isNaN(userInput.value)) {
      alert(`That's not a number, ya dingus!`);
    } else {
      outputDiv.innerHTML = `$${userInput.value}`;
    }
  });
};

module.exports = addEvent;
