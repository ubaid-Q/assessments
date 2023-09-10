import React from "react";
import Modal from "react-modal";
import "./index.css";

// Modal.setAppElement("#__next");

const SuccessModal = ({
  isOpen,
  onClose,
  message,
  SalesforceBtnHandler,
}: {
  isOpen: boolean;
  onClose: any;
  message: string;
  SalesforceBtnHandler: any;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Success Modal"
      className="success-modal"
    >
      <div className="success-modal-content">
        <h2 className="success-modal-title">Success!</h2>
        <p className="success-modal-message">{message}</p>
        <button className="success-modal-close-btn" onClick={onClose}>
          Close
        </button>
        <br />
        <button
          className="success-modal-close-btn"
          onClick={SalesforceBtnHandler}
        >
          Submit to Salesforce
        </button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
