const getRandomColor = () => {
    let colorIndex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A','B', 'C','D', 'E','F'];
    let finalColor = '#';
    for (let i = 0; i < 6; i++) {
      finalColor += colorIndex[Math.floor(Math.random() * 16)];
      }
    return finalColor;
  }

console.log(getRandomColor());

const generateBlocks = () => {
  let box = document.getElementById('box');
  box.classList.remove('hidden');
  box.classList.add('visible');
  let square = document.querySelectorAll('.square');
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = `${getRandomColor()}`;
  }
}

const generateBlocksInterval = () => {
  setInterval(() => generateBlocks(), 1000);
}
