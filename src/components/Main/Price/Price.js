import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RegisterButton from "../../Header/ButtonComponents/RegisterButton/RegisterButton";
import "./Price.scss";

const initialViewPrices = [
  {
    id: 1,
    name: "Базовий",
    price: "1",
    duration: "місяць",
    quantity: "3",
    ageCategory: "Дорослі групи від 18 років",
  },
  {
    id: 2,
    name: "Сімейний",
    price: "2",
    duration: "місяць",
    quantity: "3",
    ageCategory: "Всі групи від 2-ух людей",
  },
  {
    id: 3,
    name: "Базовий",
    price: "3",
    duration: "місяць",
    quantity: "3",
    ageCategory: "Всі групи УБД(АТО/ООС)",
  },
  {
    id: 4,
    name: "Базовий",
    price: "4",
    duration: "місяць",
    quantity: "3",
    ageCategory: "Дитячі групи до 17 років",
  },
  {
    id: 5,
    name: "Базовий",
    price: "5",
    duration: "разове",
    quantity: "3",
    ageCategory: "Дорослі групи від 18 років",
  },
  {
    id: 6,
    name: "Базовий",
    price: "6",
    duration: "місяць",
    quantity: "3",
    ageCategory: "будь-який вік",
  },
];

export default function Price() {
  const [prices, setPrices] = useState(initialViewPrices);
  const [moveBack, setMoveBack] = useState(false);
  const [priceForward, setPriceForward] = useState(false);

  const handleLeftArrowClick = () => {
    setMoveBack(true);
    setTimeout(() => {
      let newArray = [...prices];
      newArray.push(newArray.shift());
      setPrices(newArray);
      setPriceForward(true);
      setMoveBack(false);
    }, 0);
  };

  useEffect(() => {
    if (priceForward) {
      // Assuming you have a CSS transition duration, adjust the timeout accordingly
      const timer = setTimeout(() => {
        setPriceForward(false);
        setMoveBack(false);
      }, 1500); // Replace 1500 with your actual transition duration in milliseconds

      return () => clearTimeout(timer);
    }
  }, [priceForward]);

  const handleRightArrowClick = () => {
    setMoveBack(true);
    setTimeout(() => {
      let newArray = [...prices];
      newArray.unshift(newArray.pop());
      setPrices(newArray);
      setPriceForward(true);
      setMoveBack(false);
    }, 0);
  };

  const priceTags = () => {
    if(window.innerWidth <= 768){
    return prices.slice(0,2).map((item) => (
      <div className="price__containers" key={item.id}>
        <h3>{item.name}</h3>
        <h4>
          &#8372;{item.price}
          <span>/{item.duration}</span>
        </h4>
        <div className="price__containers-list">
          <ul>
            <li>{item.quantity} тренування в неділю</li>
            <li>{item.ageCategory}</li>
          </ul>
        </div>
        <RegisterButton className="price-button" description="записатись" />
      </div>
    ))
  } else if(window.innerWidth <= 1024) {
    return prices.slice(0,4).map((item) => (
      <div className="price__containers" key={item.id}>
        <h3>{item.name}</h3>
        <h4>
          &#8372;{item.price}
          <span>/{item.duration}</span>
        </h4>
        <div className="price__containers-list">
          <ul>
            <li>{item.quantity} тренування в неділю</li>
            <li>{item.ageCategory}</li>
          </ul>
        </div>
        <RegisterButton className="price-button" description="записатись" />
      </div>
    ))
  }else{
    return prices.map((item) => (
      <div className="price__containers" key={item.id}>
        <h3>{item.name}</h3>
        <h4>
          &#8372;{item.price}
          <span>/{item.duration}</span>
        </h4>
        <div className="price__containers-list">
          <ul>
            <li>{item.quantity} тренування в неділю</li>
            <li>{item.ageCategory}</li>
          </ul>
        </div>
        <RegisterButton className="price-button" description="записатись" />
      </div>
    ))
  }
  }

  return (
    <main>
      <section className="price">
        <div className="price__shadow"></div>
        <div className="price_container">
          <div className="price_container-arrows">
            <div className="arrow-button left" onClick={handleLeftArrowClick}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="arrow-button right" onClick={handleRightArrowClick}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="price__title">ціни</div>
          <div className={`price_container-bills ${priceForward ? "priceTransitioning" : moveBack ? "priceBackwards" : ""}`}>
            {priceTags()}
          </div>
        </div>
      </section>
    </main>
  );
}
