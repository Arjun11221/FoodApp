import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_URL } from "../utils/constant";
import useStatus from "../utils/useStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    const restaurantsData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  };

  const handleSearch = () => {
    const filtered = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    
  };

  const handleTopRated = () => {
    const filtered = restaurants.filter((res) => res?.info?.avgRating > 4.2);
    setFilteredRestaurants(filtered);
    setIsTopRated(true);
  };

  const handleReset = () => {
    setFilteredRestaurants(restaurants);
    setIsTopRated(false);
  };

  const status = useStatus();

  if(!status){
    return(
      <h2>You're Offline. Plz Check Your Internet Connection.</h2>
    )
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
     <div className="py-6 flex justify-start ">
     <div className="mx-4 " >
        <input
        className="p-2 w-96 border-2 border-gray-500 rounded"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="px-4 py-3 mx-4 rounded-md bg-slate-300" onClick={handleSearch}>Search</button>
      </div>
      <div className="">
        <button className="px-4 py-3 mx-4 rounded-md bg-slate-300" onClick={handleTopRated}>
          Top Rated Restaurant
        </button>
        {isTopRated && (
          <button className="px-4 py-3 mx-4 rounded-md bg-slate-300" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
     </div>

      <div className="flex flex-wrap">
        {filteredRestaurants?.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
