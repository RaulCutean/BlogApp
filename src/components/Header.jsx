import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header = ({ title, width }) => {
  return (
    <header className="Header">
      <h1>
        <Link className="title" to="/">
          {title}
        </Link>
      </h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};
