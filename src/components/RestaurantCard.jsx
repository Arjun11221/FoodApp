import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({resData})=>{

    const {name, cuisines, avgRating, costForTwo ,cloudinaryImageId} = resData.info;

    return(
        <div className="m-4 p-4 w-64 shadow rounded-md bg-zinc-200 hover:bg-zinc-300 " >
            <img className="rounded-t-lg" src={CDN_URL + cloudinaryImageId} alt="" />
            <h3 className="text-lg font-semibold py-2" >{name}</h3>
            <h4 className="" >{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4> 
        </div>
    )
}

export default RestaurantCard;