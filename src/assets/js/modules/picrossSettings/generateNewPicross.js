import createPicross from '../picross/creation/createPicross';
import createMatrix from '../../utils/createMatrix';
import allocatePicrossValues from '../picross/creation/allocatePicrossValues';
import getPicrossSize from '../picross/creation/getPicrossSize';
import addMinimalValueToInputIfInputIsEmpty from '../picrossSettings/addMinimalValueToInputIfInputIsEmpty';

export default function generateNewPicross(width, height) {
  const buttonGenerate = document.querySelector('[data-generate-picross]');
  const screenWidth = screen.width;

  buttonGenerate.addEventListener('click', function(){
    let picross = document.querySelector('[data-picross]');
    while (picross.firstChild){
      picross.removeChild(picross.firstChild);
    }

    if (screenWidth < 1024) {
      addMinimalValueToInputIfInputIsEmpty();
    }

    const { width, height } = getPicrossSize();
    let matrix = createMatrix(width, height);
    
    allocatePicrossValues(width, height, matrix, width);
    
    createPicross(width, height, matrix);
    
  });
};
