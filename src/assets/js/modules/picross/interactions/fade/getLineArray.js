export default function getLineArray(line) {
  const lineArray = []

  line.forEach(square => {
    if (square.getAttribute('data-picross-square') === "true") {
      lineArray.push(true);
    } else {
      lineArray.push(false);
    }
  });

  return lineArray;
}
