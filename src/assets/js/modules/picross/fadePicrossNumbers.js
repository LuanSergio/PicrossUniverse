import { getPicrossValues } from './getPicrossValues'

export function fadePicrossNumbers(columns, rows, direction, numbersArray){
  let picrossValues;
  const picross = document.querySelector('[data-picross]');
  let clicksCounted = [];
  console.log('numbersArray');
  console.log(numbersArray);
  
  // for(let i = 0; i < rows; i++) {
  //   clicksCounted[i] = []
  // }
 function createNumbersArray(){
  picrossValues = getPicrossValues(columns, rows);
  if(direction == 'row') {
    for (let i = 0; i  < rows; i++) {
      clicksCounted[i] = [];
      let counter = 0;
      for (let j = 0; j < columns; j++) {
        if(picrossValues[i][j] === true){
          counter++;
        } else {
          if(counter > 0 ){
            clicksCounted[i].push(counter);
            counter = 0;
            }
        }
        if ((j+1) === columns) {
          if(counter > 0 ){
            clicksCounted[i].push(counter);
            counter = 0;
          }
        }
      }
    }
  }
 }

 function fadeFilledNumbers() {
  if(direction == 'row') {
    for (let i = 0; i  < rows; i++) {
      for (let j = 0; j < numbersArray[i].length; j++) {
        if(numbersArray[i][j] == clicksCounted[i][j]){
          console.log('TRUE');
        }
      }
    }
  }
 }

 picross.addEventListener('click', evt => createNumbersArray());
 picross.addEventListener('click', evt => fadeFilledNumbers());

}