import { generateRandomNumber } from '../../utils/generateRandomNumber';
import { generateBooleanValue } from '../../utils/generateBooleanValue';
import { addValueToMatrix } from '../../utils/addValueToMatrix';
import { addPicrossNumberSpace } from './addPicrossNumberSpace';

export function alocatePicrossValues(columns, rows, matrix, limit) {
  let row = 0;

  while(row < rows){
    let index = 0;
    while(limit > 0) {

      let number = generateRandomNumber(limit);
      let value = generateBooleanValue();

      if(number == limit) {
        limit = addValueToMatrix(index, row, matrix, value, number);
        limit = 0;
      }
      else if ( number == (limit - 1)) {
        addValueToMatrix(index, row, matrix, value, number);
        index = index + number;
        addPicrossNumberSpace(index, row, matrix, value);
        limit = 0;
      }
      else {
        addValueToMatrix(index, row, matrix, value, number);
        index = index + number;
        addPicrossNumberSpace(index, row, matrix, value);
        index++;
        limit = ((limit - 1) - number);
      }
    }
    row++;
    limit = columns;
  }
};
