function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
const controlsContainer = document.querySelector('#controls');
const numberInput = controlsContainer.querySelector('input');
const createButton = controlsContainer.querySelector('[data-create]');
const destroyButton = controlsContainer.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
function handleCreateButtonClick() {
    const amount = parseInt(numberInput.value.trim(), 10);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      numberInput.value = '';  
    } else {
      alert('Please enter a number between 1 and 100');
    }
}
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}