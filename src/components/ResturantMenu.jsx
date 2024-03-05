import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
import RestaurantCetegory from "./RestaurantCetegory";
import { useState } from "react";

const ResturantMenu = () => {

  const restId = useParams();
  const restInfo = useRestrauntMenu(restId);

  const [openIndex, setOpenIndex] = useState(0);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
  const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-6">{name}</h1>
      <p className="text-lg font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {
        categories.map((category, index) => (
          <RestaurantCetegory key={category?.card?.card?.title} data={category?.card?.card} openIndex={index === openIndex && true} setOpenIndex={() => setOpenIndex(index)} />
        ))
      }
    </div>
  );
};

export default ResturantMenu;
