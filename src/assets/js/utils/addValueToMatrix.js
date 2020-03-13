export function addValueToMatrix (index, column, matrix, value, number) {
  for(let i = 0; i < number; i ++) {
    matrix[column][index] = value;
    index++;
  };
};
