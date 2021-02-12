export default function singleSolucionValidator(width, height, matrix, picrossValues) {
  if (compareMatrices(width, height, matrix, picrossValues)) {
    confetti.start();
    toggleModal(width, height);
  }
}