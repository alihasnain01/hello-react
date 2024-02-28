import { useState, useEffect } from "react";
import RasturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    json = await data.json();
    console.log("api data ", json?.data);

    setRestData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log("updated data ", restData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Please check your internet connection</h1>
  }

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
            resname={item.info.name}
            cuisine={item.info.cuisines}
            avgRating={item.info.avgRating}
            slaString={item.info.sla.slaString}
            cloudinaryImageId={item.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
