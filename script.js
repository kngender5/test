const colorChangeBtn = document.getElementById('colorChangeBtn');

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeButtonColor() {
  const newColor = getRandomHexColor();
  colorChangeBtn.style.backgroundColor = newColor;
}

colorChangeBtn.addEventListener('click', changeButtonColor);