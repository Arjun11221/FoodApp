import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines} - {costForTwoMessage}
      </h4>
      <ul>
        {itemCards?.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - ₹{res.card.info.price / 100 || res.card.info.defaultPrice/100 }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
