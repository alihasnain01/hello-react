import { useState, useEffect } from "react";
import RasturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    json = await data.json();
    console.log(
      "api data ",
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRestData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log("updated data ", restData);
  };

  if (restData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        {restData.map((item) => (
          <RasturantCard
            key={item.info.id}
            resname="KFC Food"
            cuisine="Burger, Fries"
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
