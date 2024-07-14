import React from "react";
import "./aboutMotivation.scss";

const list = [
  { id: 1, text: "Заведіть щоденник і записуйте в нього свої цілі та результати." },
  { id: 2, text: "Щодня записуйте, які вправи ви зробили сьогодні, аналізуйте, чого вам вдалося досягти за останній час." },
  { id: 3, text: "Відмінною мотивацією є ведення фотозвіту." },
  { id: 4, text: "Завдяки знімкам ви помітите навіть найменші зміни." },
];

function AboutMotivation() {
  return (
    <section className="aboutMotivation">
      {/*Header*/}
      <div className="aboutMotivation__title">
        <div className="aboutMotivation__title-header">
          <h4>Як мотивувати себе на тренування?</h4>
        </div>
        <div className="aboutMotivation__description">
          <p className="aboutMotivation__description-paragraph">
            Правильна мотивація дуже важлива для занять спортом. Таким чином, ми
            повинні постійно ставити перед собою нові цілі і досягати їх. А ще
            хочемо дати кілька корисних порад тим, хто не може впоратися з
            лінню.
          </p>
          <p className="aboutMotivation__description-paragraph">
            І, звичайно ж, ніколи не забувайте про мету! Досягайте поставлених
            цілей, наприклад, схуднути, ви комусь сподобаєтеся, станете
            витривалішими. Пам'ятайте, що спорт в будь-якому випадку позитивно
            впливає на наше життя.
          </p>
          <p className="aboutMotivation__description-paragraph">
            Завдяки фізичним навантаженням ви зможете правильно подбати про своє
            здоров'я та зовнішній вигляд. Не відкладайте на потім! Акт! І вже
            скоро ви зможете побачити довгоочікувані результати!
          </p>
        </div>
      </div>
      {/*LIST*/}
      <div className="aboutMotivation__list">
        <ul>
          {list.map(item => (
            <li key={item.id} className="aboutMotivation__list-item">{item.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutMotivation;
