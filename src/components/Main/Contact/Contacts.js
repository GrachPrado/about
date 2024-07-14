import React from "react";
import "./contact.scss";

const ContactInfo = () => (
  <div className="contact__info">
    <h4>Контактна інформація</h4>
    <p>
      РЕЖИМ РАБОТЫ:<br />
      Пн-Пт: с 7:00 до 23:00, Сб-Вс: с 9:00 до 17:00.
    </p>
    <p>
      Адреса<br />
      бул. Перова 23Б
    </p>
    <p>
      телефони<br /> 050-930-5704
    </p>
  </div>
);

const ContactMap = () => (
  <div className="contact__map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.597492895309!2d30.5917836!3d50.4858366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d035b333b42d%3A0x6975a5c9303b90d6!2z0LHRg9C7LiDQn9C10YDQvtCy0LAsIDIz0JEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1720973714617!5m2!1sru!2sua"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Embed"
    ></iframe>
  </div>
);

export default function Contacts() {
  return (
    <section className="contact">
      <ContactInfo />
      <ContactMap />
    </section>
  );
}
