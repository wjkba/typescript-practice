import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Modal, { ModalRef } from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";
import { useSessionsDispatch, useSessionsSelector } from "../store/hooks";
import { add } from "../store/sessions-slice";

type BookSessionProps = {
  isBooking: boolean;
  setIsBooking: Dispatch<SetStateAction<boolean>>;
};

export default function BookSession({
  isBooking,
  setIsBooking,
}: BookSessionProps) {
  const bookModal = useRef<ModalRef>(null);
  const dispatch = useSessionsDispatch();
  const sessions = useSessionsSelector((store) => store.sessions);
  const test = { name: "NAME", description: "SDOAKODKS", date: "XXXXX" };

  useEffect(() => {
    if (isBooking) {
      bookModal.current?.openModal();
    }
  }, [isBooking]);

  function handleCloseBooking() {
    bookModal.current?.closeModal();
    setIsBooking(false);
  }

  function handleConfirmBooking() {
    console.log("CONFIRMING");
    dispatch(add(test));
  }

  const name = useRef<HTMLInputElement>(null);
  const mail = useRef<HTMLInputElement>(null);

  return (
    <Modal ref={bookModal}>
      <h1>Book Session</h1>
      <Input id="name" label="YOUR NAME" ref={name} />
      <Input id="email" label="YOU EMAIL" ref={mail} />
      <p className="actions">
        <Button onClick={handleCloseBooking} textOnly={true}>
          Cancel
        </Button>
        <Button onClick={handleConfirmBooking}>Book Session</Button>
        <Button onClick={() => console.log(sessions)}>TEST</Button>
      </p>
    </Modal>
  );
}
