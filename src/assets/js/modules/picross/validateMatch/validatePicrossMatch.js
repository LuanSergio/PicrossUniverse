import getPlayerPicrossValues from './getPlayerPicrossValues';
import toggleModal from '../../winModal/toggleModal';
import confetti from '../../../utils/confetti.js';
import validateHorizontalMatrixLine from './validateHorizontalMatrixLine';
import validateVerticalMatrixLine from './validateVerticalMatrixLine';
import stopGame from './stopGame';

export default function picrossValidator(width, height, matrix) {
  let picrossPlayerValuesMatrix = getPlayerPicrossValues(width, height);

  if ((validateHorizontalMatrixLine(picrossPlayerValuesMatrix, matrix)) &&
    (validateVerticalMatrixLine(picrossPlayerValuesMatrix, matrix))) {

    const picross = document.querySelector('[data-picross]');

    if (picross.getAttribute('data-picross') !== "won") {
        confetti.start();
        toggleModal(width, height);
        stopGame();
    }
  }
}
