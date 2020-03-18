import { getPicrossValues } from './getPicrossValues'

export function fadePicrossNumbers(columns, rows, direction, numbersArray){
  let picrossValues;
  const picross = document.querySelector('[data-picross]');

  console.log('numbersArray');
  console.log(numbersArray);
  
  picross.addEventListener('click', function(evt){
    picrossValues = getPicrossValues(columns, rows);
    console.log('generated matrix');
    console.log(picrossValues);
     let countedArray = [];
    if(direction == 'horizontal') {
      for (let i = 0; i  < rows; i++) {
        console.log('index now:' + i);
        countedArray[i] = [];
        let counter = 0;
        for (let j = 0; j < columns; j++) {
          console.log('values picross ' + 'i:' + i + ' j: ' + j );
          if(picrossValues[i][j] === true){
            counter++;
        }
          console.log('counter');
          console.log(counter);
        }
        countedArray[i].push(counter);
        console.log('countedArray');
        console.log(countedArray);
      }
    }
  });

  

}