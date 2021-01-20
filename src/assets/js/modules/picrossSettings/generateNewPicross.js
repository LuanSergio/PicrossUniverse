import createPicross from '../picross/creation/createPicross';
import createMatrix from '../../utils/createMatrix';
import alocatePicrossValues from '../picross/creation/alocatePicrossValues';
import definePicrossSize from '../picross/creation/definePicrossSize';

export default function generateNewPicross(width, height) {
  const buttonGenerate = document.querySelector('[data-generate-picross]');
  
  buttonGenerate.addEventListener('click', function(){
    let picross = document.querySelector('[data-picross]');
    while (picross.firstChild){
      picross.removeChild(picross.firstChild);
    }
    const { width, height } = definePicrossSize();
    let matrix = createMatrix(width, height);
    
    alocatePicrossValues(width, height, matrix, width);
    
    createPicross(width, height, matrix);
    
  });
};
