import createPicross from '../picross/creation/createPicross';
import createMatrix from '../../utils/createMatrix';
import allocatePicrossValues from '../picross/creation/allocatePicrossValues';
import getPicrossSize from '../picross/creation/getPicrossSize';
import addMinimalValueToInputIfInputIsEmpty from '../picrossSettings/addMinimalValueToInputIfInputIsEmpty';
import isMobileLayout from '../../utils/isMobileLayout';

export default function generateNewPicross(width, height) {
  const buttonGenerate = document.querySelector('[data-generate-picross]');

  buttonGenerate.addEventListener('click', function(){
    let picross = document.querySelector('[data-picross]');
    while (picross.firstChild){
      picross.removeChild(picross.firstChild);
    }

    if (isMobileLayout()) {
      addMinimalValueToInputIfInputIsEmpty();
    }

    const { width, height } = getPicrossSize();
    let matrix = createMatrix(width, height);
    
    allocatePicrossValues(width, height, matrix, width);
    
    createPicross(width, height, matrix);
    
  });
};
