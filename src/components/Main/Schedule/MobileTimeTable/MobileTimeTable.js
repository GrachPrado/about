import React, { useState } from "react";
import './MobileTimeTable.scss';

const timeTable = {
  monday: {
    time: ["час", "10:00", "12:00", "14:00", "16:00"],
    activity: ["Понеділок", "MMA", "Grappling", "Thai Box", "MMA-kids"]
  },
  tuesday: {
    time: ["час", "18:00", "22:00", "24:00", "00:00"],
    activity: ["Вівторок", "MMA", "Grappling", "Thai Box", "MMA-kids"]
  },
  wednesday: {
    time: ["час", "06:00", "07:00", "08:00", "09:00"],
    activity: ["Середа", "Борьба", "Тайский бокс", "Муай Тай", "MMA-kids"]
  },
  thursday: {
    time: ["час", "07:00", "08:00", "09:00", "10:00"],
    activity: ["Середа", "Борьба", "Тайский бокс", "Муай Тай", "MMA-kids"]
  },
  friday: {
    time: ["час", "11:00", "12:00", "13:00", "14:00"],
    activity: ["Середа", "Борьба", "Тайский бокс", "Муай Тай", "MMA-kids"]
  },
  saturday: {
    time: ["час", "15:00", "16:00", "17:00", "18:00"],
    activity: ["Середа", "Борьба", "Тайский бокс", "Муай Тай", "MMA-kids"]
  },
  
  // Add more days as needed
};

const DaySelect = ({ selectedOption, handleChange }) => (
  <div className="timeTable__title">
    <label htmlFor="infoDropdown">розклад</label>
    <select id="infoDropdown" value={selectedOption} onChange={handleChange}>
      {Object.keys(timeTable).map((day) => (
        <option key={day} value={day}>{day}</option>
      ))}
    </select>
  </div>
);

const TimeTable = ({ times, activities }) => (
  <div className="timeTable__containers">
    <div className="timeTable__containers-time">
      {times.map((time, index) => (
        <div key={index} className="timeTable__time">{time}</div>
      ))}
    </div>
    <div className="timeTable__containers-item">
      {activities.map((activity, index) => (
        <div key={index} className="timeTable__activities">{activity}</div>
      ))}
    </div>
  </div>
);

export default function MobileTimeTable({topTimeTable}) {
  const [selectedOption, setSelectedOption] = useState('monday');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const { time, activity } = timeTable[selectedOption];

  return (
    <section className={`timeTable ${topTimeTable}`}>
      <DaySelect selectedOption={selectedOption} handleChange={handleChange} />
      {selectedOption && <TimeTable times={time} activities={activity} />}
    </section>
  );
}
