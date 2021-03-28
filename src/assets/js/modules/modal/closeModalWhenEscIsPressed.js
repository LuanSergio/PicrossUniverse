import closeModal from './closeModal';

export default function closeModalWhenEscIsPressed(modal) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(modal);
    }
  })
}
