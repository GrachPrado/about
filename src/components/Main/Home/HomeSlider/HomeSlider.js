import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomeSlider.scss";
import mma_background from "./Slider__image/mma_background.png";
import thai_boxMax from "./Slider__image/thai_box-max.jpeg";
import thai_boxMin from "./Slider__image/thai_box-min.png";
import grappling_max from "./Slider__image/grappling-big.png";
import grappling_min from "./Slider__image/grappling-min.png";
import mma_kids from "./Slider__image/mma_kid-max.jpeg";

const initialGalleryItems = [
  {
    id: 1,
    label: "тайський бокс",
    description:
      "Тайський бокс (муай тай) - це бойове мистецтво, що використовує удари кулаками, ліктями, колінами, ногами, вимагає витривалості та техніки.",
    path: thai_boxMin,
    pathMax: thai_boxMax,
  },
  {
    id: 2,
    label: "грєпплинг",
    description:
      "Грєпплинг – це бойове мистецтво, зосереджене на боротьбі в партері, що включає техніки захватів, кидків та підкорень.",
    path: grappling_min,
    pathMax: grappling_max,
  },
  {
    id: 3,
    label: "mma-kids",
    description:
      "ММА для дітей – це тренування змішаних бойових мистецтв, адаптовані для дітей, з акцентом на безпеку, фізичний розвиток та дисципліну.",
    path: mma_kids,
    pathMax: mma_kids,
  },
  {
    id: 4,
    label: "mma",
    description:
      "Змішані бойові мистецтва (ММА) об'єднують різні техніки, включаючи ударні та борцівські стилі, для всебічного та ефективного бою.",
    path: mma_background,
    pathMax: mma_background,
  },
];

function HomeSlider() {
  const [galleryItems, setGalleryItems] = useState(initialGalleryItems);
  const [index, setIndex] = useState(galleryItems.length - 1);
  const [isTransitioning, setIsTransitioning] = useState(false); // not used
  const [backwards, setBackwards] = useState(false);

  const handleLeftArrowClick = () => {
    setBackwards(true);
    setTimeout(() => {
      const newGalleryItems = [...galleryItems];
      newGalleryItems.push(newGalleryItems.shift());
      setGalleryItems(newGalleryItems);
      setIndex(galleryItems.length - 1);
      setIsTransitioning(true);
      setBackwards(false);
    }, 0);
  };

  useEffect(() => {
    if (isTransitioning) {
      // Assuming you have a CSS transition duration, adjust the timeout accordingly
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setBackwards(false);
      }, 1500); // Replace 300 with your actual transition duration in milliseconds

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleRightArrowClick = () => {
    setBackwards(true);
    setTimeout(() => {
      const newGalleryItems = [...galleryItems];
      newGalleryItems.unshift(newGalleryItems.pop());
      setGalleryItems(newGalleryItems);

      setIndex(galleryItems.length - 1);
      setIsTransitioning(true);
      setBackwards(false);
    }, 0);
  };

  const handleImageClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  const current = galleryItems[index];

  return (
    <section
      className="slider"
      style={{ backgroundImage: `url(${current.pathMax})` }}
    >
      <div className="slider__shadow"></div>
      <div className="slider__info">
        <h2>категорії</h2>
        <div className="slider__info-title">
          <div key={current.id}>{current.label}</div>
        </div>
        <div className="slider__info-description">{current.description}</div>
        <div className="slider-info-navigation">
          {/*left arrow*/}
          <div onClick={handleLeftArrowClick} className={`arrow-button left`}>
            <i className={`fas fa-chevron-left`}></i>
          </div>
          {/*right arrow*/}
          <div onClick={handleRightArrowClick} className={`arrow-button right`}>
            <i className={`fas fa-chevron-right`}></i>
          </div>
        </div>
      </div>
      <div
        className={`slider__gallery ${isTransitioning ? "transitioning" : backwards ? "backwards" : ""}`}
      >

        {galleryItems.map((item, itemIndex) => {
          return (
            <div key={item.id} className="slider__gallery-container">
              <div className="slider__gallery-label">
              <span>{item.label}</span>
              </div>
              <img
                src={item.path}
                alt={item.label}
                onClick={() => handleImageClick(itemIndex)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeSlider;
