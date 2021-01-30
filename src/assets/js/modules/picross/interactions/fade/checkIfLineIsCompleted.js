import checkIfArraysAreIdentical from './checkIfArraysAreIdentical';
import countArraysTrueValue from './countArraysTrueValue';
import fadeLine from './fadeLine';
import removeFadeFromLine from './removeFadeFromLine';
import getHeaderValues from './getHeaderValues';
import getLineArray from './getLineArray';

export default function checkIfLineIsCompleted(square, orientation) {
  let dataAttribute;

  if (orientation === 'vertical') {
    dataAttribute = 'data-x';
  } else if (orientation === 'horizontal') {
    dataAttribute = 'data-y';
  } else {
    console.log('not a valid orientation parameter on CheckIfLineIsCompleted');
  }

  const position = square.getAttribute(dataAttribute);
  const line = document.querySelectorAll(`[${dataAttribute}="${position}"]`);

  const lineArray = getLineArray(line);
  const lineValues = countArraysTrueValue(lineArray);

  const headerValues = getHeaderValues(position, orientation);

  if (checkIfArraysAreIdentical(lineValues, headerValues)) {
    // return true;
    fadeLine(line);
  } else {
    removeFadeFromLine(line);
  }
}
