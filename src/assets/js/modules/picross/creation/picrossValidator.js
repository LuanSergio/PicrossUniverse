import getPicrossValues from './getPicrossValues'
import compareMatrices from '../../../utils/compareMatrices'

export default function picrossValidator(columns, rows, matrix) {
  const picross = document.querySelector('[data-picross]');
  let picrossValues = [];
  
  picross.addEventListener('click', function(){
    picrossValues = getPicrossValues(columns, rows);
   
    if(compareMatrices(columns, rows, matrix, picrossValues)){
      console.log('true');
      alert('YOU WIN!')
    }
  });

}
