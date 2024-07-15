import React from "react";
import "./HomePartners.scss";
import mma_federation from "./image/mma-federation.webp";
import thaiBox_federation from "./image/thai_box-federation.webp";
import strong__nation from "./image/strong_nation.webp";
import aurum from "./image/aurum_FC.jpeg";

const partners = [
  {
    id: 1,
    partner: mma_federation,
    label: "mma",
  },
  {
    id: 2,
    partner: thaiBox_federation,
    label: "thaiBox_federation",
  },
  {
    id: 3,
    partner: strong__nation,
    label: "strong__nation",
  },
  {
    id: 4,
    partner: aurum,
    label: "aurum",
  },
];

function HomePartners() {
  return (
    <section className="partners">
      <div className="partners__title">
        <h2>
          наші <span>партнери</span>
        </h2>
      </div>
      <div className="partners__gallery">
        {partners.map((item) => {
          return <img key={item.id} src={item.partner} alt={item.label} />;
        })}
      </div>
    </section>
  );
}

export default HomePartners;
