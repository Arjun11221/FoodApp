import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useStatus();

  return (
    <div className="flex justify-between bg-amber-300">
      <div className="py-4 ml-16">
        <img className="w-32" src={LOGO_URL} alt="" />
      </div>
      <div className="items-center" >
        <ul className="flex m-10 p-4 ">
          <li className="px-4 font-semibold text-xl " >Status : {status ? "Online" : "Offline"}</li>
          <li className="px-4 font-semibold text-xl" ><Link to='/' >Home</Link></li>
          <li className="px-4 font-semibold text-xl" ><Link to="/about">About</Link></li>
          <li className="px-4 font-semibold text-xl" ><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-semibold text-xl" ><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-semibold text-xl" >Cart</li>
          <li className="px-2 font-semibold text-xl" >
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
