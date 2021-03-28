import getPlayerPicrossValues from './getPlayerPicrossValues';
import toggleModal from '../../modal/toggleModal';
import addSizeToModal from '../../modal/addSizeToModal';
import addTimeToModal from '../../modal/addTimeToModal';
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
        const modal = document.querySelector('[data-modal-win-screen]');
        confetti.start();
        addTimeToModal();
        addSizeToModal(width, height);
        toggleModal(modal);
        stopGame();
    }
  }
}
