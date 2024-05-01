import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-300 flex justify-between border-b-2 text-left" >
          <div className="w-9/12" >
          <div className="text-lg font-semibold py-1 " >
            <span className="" >{item?.card?.info?.name}</span>
            <span> - ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100 }</span>
          </div>
          <p className="text-md">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4" >
          <div className="absolute " >
                <button className="p-2 mx-10 rounded-md bg-slate-950 text-white" onClick={() => handleAdd(item)} >Add + </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="" />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
