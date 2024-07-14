// checked
import React from "react";
import FooterContactSocialMedia from "./footerContactSocialMedia/FooterContactSocialMedia";
import FooterContactLinks from "./FooterContactLinks/FooterContactLinks";
import FooterContactInfo from "./FooterContactInfo/FooterContactInfo";
import FooterRegister from "./FooterRegister/FooterRegister";
import "./footer.scss";

// Footer Contact Social Media

const title = "Fight Ambition Team";
const className = "footer__contact-socialMedia";
const iconClassName = "footer__contact-icon";

function Footer() {
  return (
    <footer>
      <div className="footer__shadow"></div>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__contact">
            <FooterContactSocialMedia
              title={title}
              className={className}
              iconClassName={iconClassName}
            />
            <FooterContactLinks />
            <FooterContactInfo />
          </div>
          <FooterRegister />
          </div>
        <div className="footer__bottom">
          <p>Fight ambition team 2021 . Усі права захищені.</p>

        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
