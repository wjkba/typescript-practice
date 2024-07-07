import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function Header() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleOpenModal() {
    setModalIsVisible(true);
  }

  function handleCloseModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && <Modal onClose={handleCloseModal} />}
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
