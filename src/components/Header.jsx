import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useStatus();

  const {name} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between  bg-slate-300">
      <Link to="/" className="py-4 ml-20">
        <img className="w-32 rounded-lg" src={LOGO_URL} alt="" />
      </Link>
      <div className="items-center" >
        <ul className="flex m-10 p-4 ">
          <li className="px-4 font-semibold text-xl " >Status : {status ? "Online" : "Offline"}</li>
          <li className="px-4 font-semibold text-xl" ><Link to='/' >Home</Link></li>
          <li className="px-4 font-semibold text-xl" ><Link to="/about">About</Link></li>
          <li className="px-4 font-semibold text-xl" ><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-semibold text-xl" ><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-semibold text-xl" ><Link to="/cart">Cart - ({cartItems.length} Items)</Link></li>
          <li className="px-2 font-semibold text-xl" >
            <button onClick={() => setBtnName((btnName=== "Login") ? "Logout" : "Login")}>
              {btnName}
            </button>
          </li>
          <li className="px-4 font-semibold text-xl" >{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
