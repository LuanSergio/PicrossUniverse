export default function addValueToMatrix (index, column, matrix, value, quantity) {
  for(let i = 0; i < quantity; i ++) {
    matrix[column][index] = value;
    index++;
  };
};
