import closeModal from "./closeModal";
import confetti from "../../utils/confetti";
import toggleSettings from "../picrossSettings/toggleSettings";

export default function closeModalWhenOverlayIsClicked(
  modal,
  overlay,
  won = undefined
) {
  overlay.addEventListener("click", () => {
    confetti.stop();
    closeModal(modal);

    const screenWidth = screen.width;

    if (screenWidth < 1024) {
      if (won) {
        toggleSettings();
      }
    }
  });
}
