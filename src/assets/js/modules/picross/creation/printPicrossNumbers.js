export default function printPicrossNumbers(width, height, direction, numbersArray) {
  let numbersHolders;
  let numbersArraywrapped = [];

  function wrapNumbersArrayInSpan(){
    for (let i = 0; i < numbersArray.length; i++) {
      numbersArraywrapped[i] = [];
      if(numbersArray[i] == '') {
        numbersArraywrapped[i] = [0];
      }
      for (let j = 0; j < numbersArray[i].length; j++) {
        numbersArraywrapped[i][j] = `<span data-number-${direction}=${i} data-number-position=${j}>` + 
        numbersArray[i][j] + 
        '</span>'
      }
    }
  }

  switch (direction) {
    case "row":
      numbersHolders = document.querySelectorAll('[data-numbers-x]');
      wrapNumbersArrayInSpan();
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          numbersHolders[i].innerHTML = numbersArraywrapped[i].join(" ");
        }
      }
      break;
    case "column":
      numbersHolders = document.querySelectorAll('[data-numbers-y]');  
      wrapNumbersArrayInSpan();
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          numbersHolders[i].innerHTML = numbersArraywrapped[i].join("<br>");
        }
      }
      break;
  }

}
