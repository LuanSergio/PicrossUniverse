import toogleModal from './toggleModal'

export default function closeModalWhenOverlayIsClicked() {
  const overlay = document.querySelector('[data-modal-overlay]');

  overlay.addEventListener('click', () => {
    toogleModal();
  });
}
