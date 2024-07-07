import { createPortal } from "react-dom";
import Button from "./Button";
type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  return createPortal(
    <>
      <dialog className="modal" open>
        <Button onClick={onClose}>Close</Button>
      </dialog>
    </>,
    document.getElementById("modal-root")!
  );
}
