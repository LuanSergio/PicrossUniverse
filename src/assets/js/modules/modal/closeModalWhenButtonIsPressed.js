import toogleModal from './toggleModal'

export default function closeModalWhenButtonIsPressed() {
  const closeButton = document.querySelector('[data-modal-close]');

  closeButton.addEventListener('click', () => {
    toogleModal();
  });
}
