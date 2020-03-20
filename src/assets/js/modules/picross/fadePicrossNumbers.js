import { getPicrossValues } from './getPicrossValues'

export function fadePicrossNumbers(columns, rows, direction, numbersArray){
  let picrossValues;
  const picross = document.querySelector('[data-picross]');

  console.log('numbersArray');
  console.log(numbersArray);
  
  

 function createClicksNumberArray(){
  let countedArray = [];
  picrossValues = getPicrossValues(columns, rows);
  if(direction == 'horizontal') {
    for (let i = 0; i  < rows; i++) {
      countedArray[i] = [];
      let counter = 0;
      for (let j = 0; j < columns; j++) {
        
        if(picrossValues[i][j] === true){
          counter++;
        } else {
          if(counter > 0 ){
            countedArray[i].push(counter);
            counter = 0;
            }
        }

        if ((j+1) === columns) {
          if(counter > 0 ){
            countedArray[i].push(counter);
            counter = 0;
          }
        }
      }
    }
  }
  console.log('countedArray');
  console.log(countedArray);
 }  

 picross.addEventListener('click', evt => createClicksNumberArray());

}