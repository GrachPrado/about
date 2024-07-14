import React, { useState } from "react";
import './aboutGallery.scss';
import Modal from './AboutModal/AboutModal';
import mmaAbout from './image/mma.png';
import mma_kidsAbout from './image/mma_kids.png';
import grappling from './image/grappling.png';
import thai_box from './image/thai_box.png';

const bottomGallery = [
    {id: 1, path: thai_box},
    {id: 2, path: grappling},
    {id: 3, path: mma_kidsAbout},
    {id: 4, path: mmaAbout},
];

export default function AboutGallery() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="aboutGallery">
      {bottomGallery.map((item) => (
        <div key={item.id} className="galleryItem" onClick={() => handleImageClick(item.path)}>
          <img src={item.path} alt="Gallery item" />
        </div>
      ))}
      <Modal show={showModal} onClose={handleCloseModal} image={modalImage} />
    </section>
  );
}
