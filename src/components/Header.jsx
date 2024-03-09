import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLog, setBtnLog] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between items-center px-10">
      <div className="header-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul className="flex space-x-3">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <li>
            <button
              onClick={() => setBtnLog(btnLog === "Login" ? "Logout" : "Login")}
            >
              {btnLog}
            </button>
          </li>
          <li>{loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
