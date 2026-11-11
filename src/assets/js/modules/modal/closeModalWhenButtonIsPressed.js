import closeModal from "./closeModal";
import confetti from "../../utils/confetti";
import toggleSettings from "../picrossSettings/toggleSettings";
import isMobileLayout from "../../utils/isMobileLayout";

export default function closeModalWhenButtonIsPressed(
  modal,
  closeButton,
  won = undefined
) {
  closeButton.addEventListener("click", () => {
    confetti.stop();
    closeModal(modal);

    if (isMobileLayout()) {
      if (won) {
        toggleSettings();
      }
    }
  });
}
