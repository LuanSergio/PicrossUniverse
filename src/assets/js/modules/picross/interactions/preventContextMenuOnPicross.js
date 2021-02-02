export default function preventContextMenuOnPicross() {
 const picross = document.querySelector('[data-picross]');

 picross.addEventListener('contextmenu', event => {
   event.preventDefault();
 });
}