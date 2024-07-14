// checked
import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from React Router
import "./FooterContactLinks.scss";

const navItems = [
  { id: 4, to: "/about", label: "про клу", postfix: "б" },
  { id: 5, to: "/grappling", label: "грепплі", postfix: "нг" },
  { id: 6, to: "/thaibox", label: "тайський бо", postfix: "кс" },
  { id: 7, to: "/mma", label: "мм", postfix: "а" },
  { id: 8, to:"/MMAChildren", label: "mma-ki", postfix:"ds"},
];


const navList = navItems.map((item) => (
  <li key={item.id}>
    <NavLink to={item.to}>
    <span>{item.label}</span>
      {item.postfix}
    </NavLink>
  </li>
));

function FooterContactLinks() {
  return (
    <div className="footer__contact-links">
      <h2>fat</h2>
      <ul>
        {navList}
              </ul>
            </div>
            );
          }

export default React.memo(FooterContactLinks);
