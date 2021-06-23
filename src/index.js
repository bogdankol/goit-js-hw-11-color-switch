const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
const { body, startBtn, stopBtn } = refs;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onStartHandler)
stopBtn.setAttribute('disabled', true)

function onStartHandler() {
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');

    let previousColor;

    let id = setInterval(() => {
        const variableColor = randomIntegerFromInterval(0, colors.length - 1);

        if (variableColor === previousColor) { // additional check of color
            body.style.backgroundColor =
              colors[Math.floor(Math.random() * (colors.length))];
        } else {
            body.style.backgroundColor = colors[variableColor];
        }

        previousColor = variableColor;
    
    }, 500)

    stopBtn.addEventListener('click', onStopHandler);

    function onStopHandler() {
        clearInterval(id);

        stopBtn.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled');
    }  
}









// Для генерации случайного числа(индекс элемента массива цветов),
//     используй функцию randomIntegerFromInterval.



































































































































































































































































