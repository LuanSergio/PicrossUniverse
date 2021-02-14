export default function stopGame() {
  const picross = document.querySelector('[data-picross]');

  picross.setAttribute('data-picross', "won");
}
