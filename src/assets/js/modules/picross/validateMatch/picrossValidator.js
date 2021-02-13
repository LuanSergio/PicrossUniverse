import getPlayerPicrossValues from './getPlayerPicrossValues';
import toggleModal from '../../modal/toggleModal';
import confetti from '../../../utils/confetti.js';
import validateHorizontalMatrixLine from './validateHorizontalMatrixLine';
import validateVerticalMatrixLine from './validateVerticalMatrixLine';

export default function picrossValidator(width, height, matrix) {
  let picrossPlayerValuesMatrix = getPlayerPicrossValues(width, height);

  if ((validateHorizontalMatrixLine(picrossPlayerValuesMatrix, matrix)) &&
    (validateVerticalMatrixLine(picrossPlayerValuesMatrix, matrix))) {
    confetti.start();
    toggleModal(width, height);
  }
}
