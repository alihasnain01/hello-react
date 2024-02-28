import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLog, setBtnLog] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center">
      <div className="header-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul className="flex space-x-3">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
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
