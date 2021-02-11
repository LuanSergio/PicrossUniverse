import fillSquare from '../fillSquare'
import checkClickBehavior from '../checkClickBehavior';
import checkSlideInputBehavior from '../checkSlideInputBehavior';

export default function squareMouseDown(clickInteractions, event, hoveredSquares, states) {
  const screenWidth = screen.width;

  if (screenWidth >= 1024) {
  clickInteractions.buttonType = event.button;
  } else {
    clickInteractions.buttonType = checkSlideInputBehavior(
      clickInteractions.initialSquare,
      states
    );
  }
  clickInteractions.initialSquare = event.target;
  clickInteractions.isPressed = true;

    clickInteractions.behavior = checkClickBehavior(
      clickInteractions.initialSquare,
      clickInteractions.buttonType,
      states
    );


  hoveredSquares.push(clickInteractions.initialSquare);
  clickInteractions.initialSquare.classList.add(states.trueHover);
  fillSquare(
    clickInteractions.initialSquare,
    clickInteractions.behavior,
    clickInteractions.buttonType,
    states
  );
}
