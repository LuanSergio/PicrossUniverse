export default function preventContextMenu() {
 const picross = document.querySelector('[data-picross]');

 picross.addEventListener('contextmenu', event => {
   event.preventDefault();
 });
}