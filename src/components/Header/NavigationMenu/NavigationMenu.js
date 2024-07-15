// CHECKED 15/07/2024
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavigationItem = ({ item }) => (
  <li className="header__nav-item">
    <NavLink
      to={item.to}
      className={({ isActive }) => (isActive ? "active" : undefined)}
    >
      <span>{item.label}</span>
      {item.postfix || ""}
    </NavLink>
  </li>
);

export default function NavigationMenu({ className }) {
  const [isWide, setIsWide] = useState(() => window.innerWidth > 1024);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: 1, to: "/", label: "головн", postfix: "а" },
    { id: 2, to: "/Price", label: "цін", postfix: "и" },
    { id: 3, to: "/Schedule", label: "розклад" },
    { id: 4, to: "/About", label: "o на", postfix: "с" },
    { id: 5, to: "/Grappling", label: "грепплі", postfix: "нг" },
    { id: 6, to: "/Thaibox", label: "тайський бо", postfix: "кс" },
    { id: 7, to: "/MMA", label: "мм", postfix: "а" },
    { id: 8, to: "/MMAChildren", label: "mma-ki", postfix: "ds" },
    { id: 9, to: "/Contact", label: "контакт", postfix: "и" },
    { id: 10, to: "/FAQ", label: "fa", postfix: "q" },
  ];

  const dropdownItems = navItems.slice(4, 8);
  const isDropdownItemActive = dropdownItems.some((item) =>
    location.pathname.includes(item.to)
  );
  const services = "Послуги";

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <nav className={className}>
      <ul className="header__nav-list">
        {navItems.slice(0, 4).map((item) => (
          <NavigationItem key={item.id} item={item} />
        ))}
        {!isWide && (
          <li
            key="dropdown"
            className="header__nav-item dropdown"
            onClick={toggleDropdown}
          >
            <span
              className={isDropdownItemActive ? "dropdown-open" : "inherit"}
              style={{ borderBottom: "2px solid #FFD540" }}
            >
              {services}
            </span>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <NavigationItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </li>
        )}
        {isWide &&
          dropdownItems.map((item) => (
            <NavigationItem key={item.id} item={item} />
          ))}
        {navItems.slice(8).map((item) => (
          <NavigationItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}
