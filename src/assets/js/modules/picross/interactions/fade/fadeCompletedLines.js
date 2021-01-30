import checkIfLineIsCompleted from './checkIfLineIsCompleted';
import fadeLine from './fadeLine';

export default function fadeCompletedLines() {
  const squares = document.querySelectorAll('[data-picross-square]');

  squares.forEach(square => {
    const clickEvents = ['click', 'contenxtmenu', 'mouseup', 'mousedown']

    clickEvents.forEach((clickEvent) => {
      square.addEventListener(clickEvent, event => {
        setTimeout(function () { 
          checkIfLineIsCompleted(square, 'vertical');
          checkIfLineIsCompleted(square, 'horizontal');
        }, 100);
      });
    })
  });
}