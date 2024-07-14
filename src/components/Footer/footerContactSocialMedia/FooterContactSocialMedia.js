// checked
import React from "react";
import FacebookSVG from "./SVG/FacebookSVG";
import InstagramSVG from "./SVG/InstagramSVG";
import YoutubeSVG from "./SVG/YoutubeSVG";
import "./FooterContactSocialMedia.scss";

function FooterContactSocialMedia({ title, className, iconClassName }) {
  return (
    <div className={className}>
      <p>{title}</p>
      <div className={iconClassName}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <InstagramSVG />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FacebookSVG />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <YoutubeSVG />
        </a>
      </div>
    </div>
  );
}

export default React.memo(FooterContactSocialMedia);
