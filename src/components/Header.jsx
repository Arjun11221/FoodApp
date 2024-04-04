import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status : {status ? "Online" : "Offline"}</li>
          <li><Link to='/' >Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <li>
            <button onClick={() => setBtnName((btnName=== "Login") ? "Logout" : "Login")}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
