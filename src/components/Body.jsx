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
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="btn">
        <button className="fliter-btn" onClick={handleTopRated}>
          Top Rated Restaurant
        </button>
        {isTopRated && (
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
      <div className="res-container">
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
