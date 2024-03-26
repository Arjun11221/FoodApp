import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button onClick={() => setBtnName(!btnName)}>
              {btnName ? "login" : "logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
