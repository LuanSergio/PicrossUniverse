import { picrossNumberCounter } from './picrossNumberCounter';
import { getPicrossValues } from './getPicrossValues'

export function fadePicrossNumbers(columns, rows,){
  // tirar o array daqui, pegar o array no create picross e passar ele de parametros para as funções
  let picrossValues = getPicrossValues(columns, rows);

  // tirar o array daqui, pegar o array no create picross e passar ele de parametros para as funções
  const numbersArray = picrossNumberCounter(columns, rows, matrix, direction);
  let secondaryArray = [];
  let counter = 0;
  for (let i = 0, j = 0; i < rows; i++) {
    secondaryArray[i] = []
    while(j < columns){
      if(picrossValues[i][j] != undefined) {
        while(picrossValues[i][j] === true) {
          counter++;
          j++;
        }
       secondaryArray.push[counter++];
      }
    }
  }
}