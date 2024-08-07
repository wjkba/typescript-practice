import { useRef } from "react";
import Button from "./Button";
import Modal, { ModalRef } from "./Modal";
import UpcomingSessions from "./UpcomingSessions";

export default function Header() {
  const modalRef = useRef<ModalRef>(null);

  function handleOpenModal() {
    modalRef.current?.openModal();
  }

  function handleCloseModal() {
    modalRef.current?.closeModal();
  }

  return (
    <>
      <Modal ref={modalRef}>
        <UpcomingSessions onClose={handleCloseModal} />
      </Modal>
      <div id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <Button to="/" textOnly={true}>
                Our Mission
              </Button>
            </li>
            <li>
              <Button to="/sessions" textOnly={true}>
                Browse Sessions
              </Button>
            </li>
            <li>
              <Button onClick={handleOpenModal}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
