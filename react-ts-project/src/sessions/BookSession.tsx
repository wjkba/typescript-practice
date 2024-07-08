import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Modal, { ModalRef } from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";
import { useSessionsDispatch } from "../store/hooks";
import { add } from "../store/sessions-slice";

type bookingInfo = {
  id: string;
  title: string;
  summary: string;
  date: string;
};

type BookSessionProps = {
  isBooking: boolean;
  setIsBooking: Dispatch<SetStateAction<boolean>>;
  bookingInfo: bookingInfo;
};

export default function BookSession({
  isBooking,
  setIsBooking,
  bookingInfo,
}: BookSessionProps) {
  const bookModal = useRef<ModalRef>(null);
  const dispatch = useSessionsDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

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
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    if (email && name) {
      console.log("CONFIRMING");
      dispatch(
        add({
          id: bookingInfo.id,
          title: bookingInfo.title,
          summary: bookingInfo.summary,
          date: bookingInfo.date,
          email,
        })
      );
      handleCloseBooking();
    }
  }

  return (
    <Modal ref={bookModal}>
      <h1>Book Session</h1>
      <Input id="name" label="YOUR NAME" ref={nameRef} />
      <Input id="email" label="YOU EMAIL" ref={emailRef} />
      <p className="actions">
        <Button onClick={handleCloseBooking} textOnly={true}>
          Cancel
        </Button>
        <Button onClick={handleConfirmBooking}>Book Session</Button>
      </p>
    </Modal>
  );
}
