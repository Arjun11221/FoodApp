import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch()

  const handleRemove = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="m-5 p-5 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-1/2 m-auto">
        {cartItems.length > 0 ? (
          <>
            <button onClick={handleRemove} className="m-2 p-2 bg-slate-800 text-yellow-50 rounded-md flex right-1 ">
              Clear Cart
            </button>
            <Itemlist items={cartItems} />
          </>
        ) : <>
            <h2 className="m-2 text-lg font-semibold" >No Items to the Cart go to Home and have Food 😋. </h2>
        </>}
      </div>
    </div>
  );
};

export default Cart;
