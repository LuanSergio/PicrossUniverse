import checkIfArraysAreIdentical from './checkIfArraysAreIdentical';
import countArraysTrueValue from './countArraysTrueValue';
import fadeHeader from './fadeHeader';
import removeFadeFromHeader from './removeFadeFromHeader';
import getHeaderValues from './getHeaderValues';
import getLineArray from './getLineArray';

export default function checkIfLineIsCompleted(square, orientation) {
  let dataAttributeSquare;
  let dataAttributeHeader;

  if (orientation === 'vertical') {
    dataAttributeSquare = 'data-x';
    dataAttributeHeader = 'data-numbers-y'
  } else if (orientation === 'horizontal') {
    dataAttributeSquare = 'data-y';
    dataAttributeHeader = 'data-numbers-x'
  } else {
    console.log('not a valid orientation parameter on CheckIfLineIsCompleted');
  }

  const position = square.getAttribute(dataAttributeSquare);
  const line = document.querySelectorAll(`[${dataAttributeSquare}="${position}"]`);

  const header = document.querySelector(`[${dataAttributeHeader}="${position}"]`);
  console.log('header: ', header);

  const lineArray = getLineArray(line);
  const lineValues = countArraysTrueValue(lineArray);

  const headerValues = getHeaderValues(position, orientation);


  if (checkIfArraysAreIdentical(lineValues, headerValues)) {
    // return true;
    fadeHeader(header);
  } else {
    removeFadeFromHeader(header);
  }
}
