import getPicrossValues from './getPicrossValues'
import compareMatrices from '../../../utils/compareMatrices'
import toggleModal from '../../modal/toggleModal'
import confetti from '../../../utils/confetti.js'

export default function picrossValidator(columns, rows, matrix) {
  const picross = document.querySelector('[data-picross]');
  let picrossValues = [];
  
  console.log('confetti', confetti)
  picross.addEventListener('click', function () {
    picrossValues = getPicrossValues(columns, rows);
    if (compareMatrices(columns, rows, matrix, picrossValues)) {
      confetti.start();
      toggleModal(columns, rows);
    }
  });

}
