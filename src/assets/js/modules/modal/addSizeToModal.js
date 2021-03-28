export default function addSizeToModal(width, height) {
  const columns = document.querySelector("[data-modal-winning-screen-columns]");
  const rows = document.querySelector("[data-modal-winning-screen-rows]");

  columns.innerHTML = width;
  rows.innerHTML = height;
}
