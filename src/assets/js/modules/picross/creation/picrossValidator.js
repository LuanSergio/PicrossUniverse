import getPicrossValues from './getPicrossValues'
import compareMatrices from '../../../utils/compareMatrices'
import toggleModal from '../../modal/toggleModal'

export default function picrossValidator(columns, rows, matrix) {
  const picross = document.querySelector('[data-picross]');
  let picrossValues = [];

  picross.addEventListener('click', function () {
    picrossValues = getPicrossValues(columns, rows);

    if (compareMatrices(columns, rows, matrix, picrossValues)) {
      toggleModal(columns, rows);
    }
  });

}
