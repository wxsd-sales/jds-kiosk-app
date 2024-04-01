import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

const CustomModal = ({ isOpen, closeModal, order }) => {
  const customStyles = {
    content: {
      maxWidth: "1500px",
      margin: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <div>
        <img src={order} alt="Modal Image" />
      </div>

      <Button
        variant="dark"
        size="lg"
        className="rounded-pill btn"
        onClick={closeModal}
      >
        <span className="mr-3">
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
        </span>
        <span>Close</span>
      </Button>
    </Modal>
  );
};

export default CustomModal;
