import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data , showItems, setShowIndex }) => {

    const handleClick = ()=>{
      setShowIndex();
    }

  return (
    <div>
    <div className="w-1/2 mx-auto my-4 shadow-lg  p-4 rounded-md bg-gray-100"  >
      <div className="flex justify-between cursor-pointer " onClick={handleClick} >
      <span className="font-semibold text-xl">
        {data.title} ({data.itemCards.length})
      </span>
      <span className="text-3xl">🔻</span>
      </div>
      {showItems && <Itemlist items = {data.itemCards} />}
    </div>
     
    </div>

    
  );
};

export default RestaurantCategory;
