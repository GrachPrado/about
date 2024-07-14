import React from "react";
import HomeCoaches from '../../Home/HomeCoaches/HomeCoaches';

const secondTitle = <div className='secondTitle'><h6><span>тренуйтесь</span> в залі<br/>чемпіонів</h6>
</div>

export default function AboutCoaches() {
  return (
     <section>
     <HomeCoaches secondTitle={secondTitle} />
     </section>
  );
}
