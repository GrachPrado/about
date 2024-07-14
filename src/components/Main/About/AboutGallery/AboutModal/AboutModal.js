// Modal.js
import React from 'react';
import './AboutModal.scss';

const AboutModal = ({ show, onClose, image }) => {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image} alt="Enlarged view" />
      </div>
    </div>
  );
};

export default AboutModal;
