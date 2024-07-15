import React from "react";
import "./HomeCoaches.scss";
import roma_hachko from "./image/roma_hachko-small.webp";
import chernova_irina from "./image/chernova_ira-small.webp";
// import klimov_anton from "./image/anton_klimov.jpg";

const coachesInfo = [
  {
    id: 1,
    name: "хачко рома",
    martial_art: "ММА",
    description: `Мастер спорта по  MMA и боевому самбо.
      Тренер по MMA и боевому самбо.
      Преподаватель физического воспитания и спорта.`,
    foto: roma_hachko,
  },
  {
    id: 2,
    name: "ирина чернова",
    martial_art: "Тайський бокс",
    description: `Мастер спорта международного класса по тайскому боксу.
      Тренер по тайскому боксу.
      Преподаватель физического воспитания и спорта.`,
    foto: chernova_irina,
  },
  {
    id: 3,
    name: "климов антон",
    martial_art: "Самбо",
    description: `Мастер спорта по самбо.
      Тренер по грэпплингу и самбо.
      Преподаватель физического воспитания и спорта.`,
    foto: roma_hachko,
  },
];

function HomeCoaches({secondTitle}) {
  return (
    <section className="coaches">
      <div className="coaches__title">
        <div>
        <h2>
          Наші <span>тренери</span>
        </h2>
        </div>
        {secondTitle}
      </div>
      <div className="coaches__containers">
        {coachesInfo.map((item) => {
          return (
            <div key={item.id} className="coaches__containers-card">
              <div>
                <img src={item.foto} alt={item.name} loading="lazy" />
              </div>
              <div className="coaches__containers-cardDescription">
                <h4>{item.name}</h4>
                <p>{item.martial_art}</p>
              </div>
              <div className="coaches__containers-description">
                <div className="coaches__containers-text">
                  <h4>{item.martial_art}</h4>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeCoaches;
