import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Modal, { ModalRef } from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";

type BookSessionProps = {
  isBooking: boolean;
  setIsBooking: Dispatch<SetStateAction<boolean>>;
};

export default function BookSession({
  isBooking,
  setIsBooking,
}: BookSessionProps) {
  const bookModal = useRef<ModalRef>(null);

  useEffect(() => {
    if (isBooking) {
      bookModal.current?.openModal();
    }
  }, [isBooking]);

  function handleCloseBooking() {
    bookModal.current?.closeModal();
    setIsBooking(false);
  }

  const name = useRef<HTMLInputElement>(null);
  const mail = useRef<HTMLInputElement>(null);

  return (
    <Modal ref={bookModal}>
      <h1>Book Session</h1>
      <Input id="name" label="YOUR NAME" ref={name} />
      <Input id="email" label="YOU EMAIL" ref={mail} />
      <Button onClick={handleCloseBooking}>CLOSE</Button>
    </Modal>
  );
}
