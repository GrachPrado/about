import React, {useState, useEffect} from "react";
import MartialArt from "./MartialArt/MartialArt";
import muay_thai from "./MartialArt/image/muay_thai.png";
import MartialArtsHistory from "./MartialArtsHistory/MartialArtsHistory";
import gopuram from "./MartialArt/image/gopuram2.png"; // Ensure this import path is correct
import nong from "./MartialArt/image/nong.png";
import gopuramHalve from "./MartialArt/image/gopuram.png";
import MobileTimeTable from "../Schedule/MobileTimeTable/MobileTimeTable";
import TimeTable from "../Schedule/TimeTable/TimeTable";
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

const artDescGrappling = (
  <p>
    <span>Грепплінг</span> — це форма бойового мистецтва, яка зосереджується на
    боротьбі без ударів, використовуючи техніки захватів, кидків, підкорень та
    контролю суперника на землі.
  </p>
);

const coachDescriptionGrappling = (
  <p>
  <span>Мастер спорта международного класса</span> по Тайскому Боксу.
  Неоднократный чемпион и призер чемпионатов и кубков Украины по Тайскому Боксу и Кикбоксингу.
  Тренер по Тайскому Боксу и Кикбоксингу.
  Преподаватель физического воспитания и спорта.
  </p>
)

const art = <span>грепплінгу</span>;

const history__rightMain = (
  <p>
    <span>Тайський бокс</span> — боевое искусство Таиланда, произошедшее из
    древнего тайского боевого искусства муай боран и схожее с другими
    индокитайскими боевыми искусствами, такими как прадал серэй - Камбоджа,
    томой - Малайзия, лэхвей - Мьянма и муай лао - Лаос. Термин «муай» исходит
    от санскритского мавья и тай, в переводе означая «поединок свободных» или
    «свободный бой».
  </p>
);

const history__rightDescription = (
  <p>
  У себя на родине муай-тай стал популярным ещё в XVI веке, но мировую
  известность этот вид спорта приобрёл только во второй половине XX века после
  того, как тайские бойцы одержали ряд впечатляющих побед над представителями
  других единоборств.
</p>
);

const history__rightDescriptionFull = (
  <p>
 У себя на родине муай-тай стал популярным ещё в XVI веке, но мировую
 известность этот вид спорта приобрёл только во второй половине XX века после того,
 как тайские бойцы одержали ряд впечатляющих побед над представителями других единоборств.
 Сегодня муай-тай по-прежнему обладает огромной популярностью в Таиланде,
 где существует даже праздник — «день национального бокса Муай Тай».
 За пределами Таиланда популярность тайского бокса продолжает расти,
 во многом благодаря развитию смешанных боевых искусств,
 интенсивно применяющих муай-тай для боя в стойке.
</p>
);

export default function Grappling() {
  const check = useWindowWidth();

  return (
    <>
      <MartialArt
        art={"грепплінг"}
        artDesc={artDescGrappling}
        artPng={muay_thai}
      />
      <MartialArtsHistory
        martialArt={art}
        historyImage={nong}
        history__rightMain={history__rightMain}
        history__rightDescription={check >= 1440 ? history__rightDescriptionFull : history__rightDescription}
        backgroundImage={check >= 1440 ? gopuramHalve : gopuram}
      />
      <MartialArt
        art={"Ong Bak"}
        artDesc={coachDescriptionGrappling}
        artPng={nong}
        top={"top"}
      />
   {check >= 1440 ? <TimeTable /> : <MobileTimeTable topTimeTable={"topTimeTable"}/>}
   </>
  );
}
