export default function getHeaderValues(position, orientation) {
  let dataAttribute;

  if (orientation === 'vertical') {
    dataAttribute = 'data-number-column';
  } else if (orientation === 'horizontal') {
    dataAttribute = 'data-number-row';
  } else {
    console.log('not a valid orientation parameter on getHeaderValues');
  }

  const header = document.querySelectorAll(`[${dataAttribute}="${position}"]`);
  const headerValues = [];

  header.forEach(number => {
    headerValues.push(parseInt(number.innerHTML));
  });

  return headerValues;
}
