import { getPicrossValues } from './getPicrossValues'
import { compareMatrices } from '../../utils/compareMatrices'

export function picrossValidator(columns, rows, matrix) {
  const picross = document.querySelector('[data-picross]');
  let picrossValues = [];
  
  picross.addEventListener('click', function(){
    picrossValues = getPicrossValues(columns, rows);
    compareMatrices(columns, rows, matrix, picrossValues);
  });

  // picross.addEventListener('contextmenu', function(ev) {
  //   ev.preventDefault();
  //   picrossValues = getPicrossValues(columns, rows);
  //   compareMatrices(columns, rows, matrix, picrossValues);
  // });
}
