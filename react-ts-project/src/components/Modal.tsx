import { createPortal } from "react-dom";
import Button from "./Button";
import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

export type ModalRef = {
  openModal: () => void;
  closeModal: () => void;
};

type ModalProps = {
  children: ReactNode;
};

const Modal = forwardRef<ModalRef, ModalProps>(({ children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    console.log("OPEN");
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }

  function closeModal() {
    console.log("CLOSE");
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
