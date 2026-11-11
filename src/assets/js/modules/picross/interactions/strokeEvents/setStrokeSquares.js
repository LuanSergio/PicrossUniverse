import states from '../states';

export default function setStrokeSquares(stroke, squares) {
  stroke.squares.forEach(square => {
    if (!squares.includes(square)) {
      square.classList.remove(states.trueHover);
    }
  });

  squares.forEach(square => square.classList.add(states.trueHover));

  stroke.squares = squares;
}
