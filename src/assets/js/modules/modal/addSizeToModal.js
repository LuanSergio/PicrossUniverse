export default function addSizeToModal(width, height) {
  const columns = document.querySelector("[data-modal-win-screen-columns]");
  const rows = document.querySelector("[data-modal-win-screen-rows]");

  columns.innerHTML = width;
  rows.innerHTML = height;
}
