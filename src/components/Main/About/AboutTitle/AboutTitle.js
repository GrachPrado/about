import React from "react";
import "./about.scss";

export default function AboutTitle() {
  return (
    <section className="aboutTop">
        
      <div className="about_header">

        <div className="about_header-top">
          <div className="about_header-title">
            <h4>команда твоіх <span>амбіцій</span></h4>
          </div>
          <div className="about_header-description">
          З метою популяризації ММА та спорту в Україні 2018 року було створено клуб змішаних єдиноборств Fight Ambition Team.
          </div>
        </div>

        <div className="about_header-middle">
        </div>

        <div className="about_header-bottom">
          <div className="about_header-question">
            <h6>
           Чому важливо займатись спортом? 
            </h6>
            <p>
            Без сумніву, спорт позитивно впливає на здоров'я. Фізичні навантаження допомагають підтримувати тіло спортсмена в тонусі.            </p>
          </div>
          <div className="about_header-answer">
            <ul>
            <li>Поліпшують роботу сердця</li>
            <li>Запобігають захворюванням суглобів.</li>
            <li>Не допускають утворення тромбів.</li>
            <li>Підвищують обмін речовин.</li>
            <li>Покращують кровопостачання.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
