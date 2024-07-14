import React from "react";
import "./FooterContactInfo.scss";

function FooterContactInfo() {
  return (
    <div className="footer__contact-info">
      <h2>КОНТАКТИ</h2>
      <p>г. Киев, бул. Перова, 23б.</p>
      <p>моб: (063) 229-89-26</p>
      <p>моб: (050) 930-57-04</p>
    </div>
  );
}

export default React.memo(FooterContactInfo);
