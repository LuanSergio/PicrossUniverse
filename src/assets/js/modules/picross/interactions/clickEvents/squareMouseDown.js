import fillSquare from '../fillSquare'
import checkClickBehavior from '../checkClickBehavior';
import checkSlideInputBehavior from '../checkSlideInputBehavior';

export default function squareMouseDown(clickInteractions, event, hoveredSquares, states) {
  const screenWidth = screen.width;

  clickInteractions.buttonType = event.button;
  clickInteractions.initialSquare = event.target;
  clickInteractions.isPressed = true;
  if (screenWidth > 1024) {
    clickInteractions.behavior = checkClickBehavior(
      clickInteractions.initialSquare,
      clickInteractions.buttonType,
      states
    );
  } else if (screenWidth < 1024) {
    clickInteractions.behavior = checkSlideInputBehavior(
      clickInteractions.initialSquare,
      states
    );
  }


  hoveredSquares.push(clickInteractions.initialSquare);
  clickInteractions.initialSquare.classList.add(states.trueHover);
  fillSquare(
    clickInteractions.initialSquare,
    clickInteractions.behavior,
    clickInteractions.buttonType,
    states
  );
}
