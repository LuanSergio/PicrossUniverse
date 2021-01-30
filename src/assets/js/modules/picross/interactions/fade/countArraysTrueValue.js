export default function countArraysTrueValue(array) {
  let counter = 0;
  const arrayValues = [];

  array.forEach(item => {
    if (item) {
      counter++;
    } else if (counter > 0) {
      arrayValues.push(counter);
      counter = 0;
    }
  })
  if (counter > 0) {
    arrayValues.push(counter);
    counter = 0;
  }
  return arrayValues;
}
