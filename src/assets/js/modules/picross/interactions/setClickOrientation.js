export default function setClickOrientation(square, states, clickInteractions) {

  if(clickInteractions.isPressed === true) {
    if(!(square.classList.contains(states.trueHover))) {
      const isTheSameRow = square.getAttribute('data-x') === clickInteractions.initialSquare.getAttribute('data-x');
      const isTheSameColumn = square.getAttribute('data-y') === clickInteractions.initialSquare.getAttribute('data-y');

      if(isTheSameRow || isTheSameColumn){
        if(isTheSameRow) {
          if(clickInteractions.orientation != 'x') {
            clickInteractions.orientation = 'y';
          }
        } else if (isTheSameColumn) {
          if(clickInteractions.orientation != 'y') {
            clickInteractions.orientation = 'x';
          }
        }
      }
    }
  }
}
