import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLog, setBtnLog] = useState("Login");

  return (
    <div className="header">
      <div className="header-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            {" "}
            <Link to="/">Home </Link>{" "}
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li>Cart </li>
          <li>
            <button
              onClick={() => setBtnLog(btnLog === "Login" ? "Logout" : "Login")}
            >
              {btnLog}
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
