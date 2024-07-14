import React from "react";
import "./timeTable.scss";

const schedule = {
  час: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  "10:00": ["-", "-", "-", "-", "-", "MMA", "MMA"],
  "19:00": ["-", "MMA-KIDS", "-", "MMA-KIDS", "-", "XXX", "XXX"],
  "20:00": ["Грэпплинг\nТайский бокс","MMA\nBoxing","MMA\nBoxing","Boxing","MMA\nBoxing","XXX","XXX",],
};

export default function TimeTable() {
  return (
    <section className="schedule">
      <div className="schedule__title">
        <h4>розклад</h4>
      </div>
      <div className="schedule__containers">
        {/*TIME*/}
        <div className="schedule__containers-time">
          {Object.keys(schedule).map((item) => {
            return <div className="schedule__time">{item}</div>;
          })}
        </div>
        {/*Activities*/}
        <div className="schedule__containers-activities">
          {Object.values(schedule).map((values, index) => (
            <div key={index} className="schedule__activities">
              {values.map((value, i) => (
                <div key={i}>{value}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
