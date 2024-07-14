// checked
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavigationMenu({ className }) {
  const [isWide, setIsWide] = useState(window.innerWidth > 1024);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation(); // This hook returns the current location object

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: 1, to: "/", label: "головн", postfix: "а" },
    { id: 2, to: "/price", label: "цін", postfix: "и" },
    { id: 3, to: "/schedule", label: "розклад" },
    { id: 4, to: "/about", label: "o на", postfix: "с" },
    { id: 5, to: "/grappling", label: "грепплі", postfix: "нг" },
    { id: 6, to: "/thaibox", label: "тайський бо", postfix: "кс" },
    { id: 7, to: "/mma", label: "мм", postfix: "а" },
    { id: 8, to:"/MMAChildren", label: "mma-ki", postfix:"ds"},
    { id: 9, to: "/contacts", label: "контакт", postfix: "и" },
    { id: 10, to: "/faq", label: "fa", postfix: "q" },
  ];

  const dropdownItems = navItems.slice(4, 8); // items in the dropdown
  const isDropdownItemActive = dropdownItems.some((item) =>
    location.pathname.includes(item.to),
  );
  const services = "Послуги";
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className={className}>
      <ul className="header__nav-list">
        {navItems.slice(0, 4).map((item) => (
          <li key={item.id} className="header__nav-item">
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span>{item.label}</span>
              {item.postfix || ""}
            </NavLink>
          </li>
        ))}
        {!isWide && (
          <li
            key="dropdown"
            className="header__nav-item dropdown"
            onClick={toggleDropdown}
          >
            <span
              className={isDropdownItemActive ? "dropdown-open" : "inherit"}
              style={{ borderBottom: "2px solid #FFD540"}}
            >
              {services}
            </span>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                    >
                      <span>{item.label}</span>
                      {item.postfix || ""}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}
        {isWide &&
          dropdownItems.map((item) => (
            <li key={item.id} className="header__nav-item">
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <span>{item.label}</span>
                {item.postfix || ""}
              </NavLink>
            </li>
          ))}
        {navItems.slice(8).map((item) => (
          <li key={item.id} className="header__nav-item">
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span>{item.label}</span>
              {item.postfix || ""}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
