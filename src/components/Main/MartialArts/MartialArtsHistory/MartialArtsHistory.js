import React from "react";
import "./MartialArtsHistory.scss";

export default function MartialArtsHistory({
  backgroundImage,
  martialArt,
  historyImage,
  altHistory,
  history__rightMain,
  history__rightDescription,
}) {
  console.log("Background Image URL:", backgroundImage); // Debugging line

  return (
    <section
      className="martial-arts-history-section"
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="history">
        {/* LEFT */}
        <div className="history__left">
          <div className="history__left-title">
            <h2>Історія та переваги {martialArt}</h2>
          </div>

          <div className="history__left-image">
            <img src={historyImage} alt={altHistory} />
          </div>
        </div>
        {/* RIGHT */}
        <div className="history__right">
          <div className="history__right-main">{history__rightMain}</div>
          <div className="history__right-description">
            {history__rightDescription}
          </div>
        </div>
      </div>
    </section>
  );
}
