import React, { useState, useRef } from "react";

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion__inquirer-container">
      <div className="accordion__inquirer-header" onClick={toggleOpen}>
        <span className={`accordion__inquirer-title ${isOpen ? "active" : ""}`}>
          {item.title}
          <span className="accordion__inquirer-icon">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <rect x="0" y="13" width="29" height="3" rx="1.5" fill="#FFD540" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <rect x="13" width="3" height="29" rx="1.5" fill="#FFD540" />
              <rect
                x="0"
                y="13"
                width="29"
                height="3"
                rx="1.5"
                fill="#FFD540"
              />
            </svg>
          )}
        </span>
        </span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px" }}
        className="accordion__answer"
      >
        <p className="accordion__answer-description">{item.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
