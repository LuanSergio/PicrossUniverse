export function printPicrossNumbers(width, height, direction, picrossNumbers) {
  const numbersArray = picrossNumbers;
  let numbers
  console.log('numbersArray');
  console.log(numbersArray);
  
  if(direction === 'horizontal'){
    numbers = document.querySelectorAll('[data-numbers-x]');
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < numbersArray.length; j++) {
        if(numbersArray[i] != '') {
          numbers[i].innerHTML = numbersArray[i].join(" ");
        } else {
          numbers[i].innerHTML = 0;
        }
      }
    }
  } else {
    numbers = document.querySelectorAll('[data-numbers-y]');
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        if(numbersArray[i] != '') {
          numbers[i].innerHTML = numbersArray[i].join("<br>");
        } else {
          numbers[i].innerHTML = 0;
        }
      }
    }
  }
}
