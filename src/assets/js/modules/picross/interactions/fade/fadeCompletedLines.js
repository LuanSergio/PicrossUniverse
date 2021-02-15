import checkIfArraysAreIdentical from '../../../../utils/checkIfArraysAreIdentical';
import countArraysTrue from '../../../../utils/countArraysTrue';
import fadeElement from './fadeElement';
import removeFadeFromElement from './removeFadeFromElement';
import getHeaderValues from './getHeaderValues';
import getLineArray from './getLineArray';
import fadeLine from './fadeLine';
import removeFadeFromLine from './removeFadeFromLine';

export default function checkIfLineIsCompleted(square, orientation) {
  let dataAttributeSquare;
  let dataAttributeHeader;

  if (orientation === 'vertical') {
    dataAttributeSquare = 'data-x';
    dataAttributeHeader = 'data-numbers-y';
  } else if (orientation === 'horizontal') {
    dataAttributeSquare = 'data-y';
    dataAttributeHeader = 'data-numbers-x';
  } else {
    console.log('not a valid orientation parameter on CheckIfLineIsCompleted');
  }

  const position = square.getAttribute(dataAttributeSquare);
  
  const line = document.querySelectorAll(`[${dataAttributeSquare}="${position}"]`);
  const header = document.querySelector(`[${dataAttributeHeader}="${position}"]`);

  const lineArray = getLineArray(line);
  const lineValues = countArraysTrue(lineArray);
  
  const headerValues = getHeaderValues(position, orientation);
  
  if (checkIfArraysAreIdentical(lineValues, headerValues)) {
    fadeElement(header);
    fadeLine(header);
  } else {
    removeFadeFromElement(header);
    removeFadeFromLine(header);
  }
}
