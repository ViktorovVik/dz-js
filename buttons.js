const wrapper = document.querySelector('.wrapper');
const counter = document.querySelector('.counter');

let count = 0;
let lastActiveButton = null;

wrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    if (lastActiveButton) {
      lastActiveButton.textContent = 'Нажми меня';
    }

    count += 1;
    counter.textContent = count;
    e.target.textContent = 'Нажата';

    lastActiveButton = e.target;
  }
});
