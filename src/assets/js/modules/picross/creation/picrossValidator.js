import getPicrossValues from './getPicrossValues'
import compareMatrices from '../../../utils/compareMatrices'
import toggleModal from '../../modal/toggleModal'
import confetti from '../../../utils/confetti.js'

export default function picrossValidator(width, height, matrix) {
  let picrossValues = getPicrossValues(width, height);

  if (compareMatrices(width, height, matrix, picrossValues)) {
    confetti.start();
    toggleModal(width, height);
  }
}
