export default function addSizeToModal(width, height) {
  const columns = document.querySelector('[data-modal-columns]');
  const rows = document.querySelector('[data-modal-rows]');

  columns.innerHTML = width;
  rows.innerHTML = height;
}