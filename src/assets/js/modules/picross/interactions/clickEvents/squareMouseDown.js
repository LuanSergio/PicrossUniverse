import fillSquare from '../fillSquare'
import checkBehavior from '../checkBehavior';

export default function squareMouseDown(clickInteractions, event, hoveredSquares, states)  {
    clickInteractions.buttonType = event.button;
    clickInteractions.initialSquare = event.target;
    clickInteractions.isPressed = true;
    clickInteractions.behavior = checkBehavior(
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
