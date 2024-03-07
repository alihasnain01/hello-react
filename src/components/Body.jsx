import { useState, useEffect, useContext } from "react";
import RasturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

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
    console.log("single restraurant ", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info);


    setRestData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!onlineStatus) {
    return <h1>Please check your internet connection</h1>
  }

  if (restData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex space-x-2 m-5 items-center px-10">
        <input type="text" placeholder="search" className="border rounded-md p-2" />
        <div className="border rounded-md p-2 bg-green-500 hover:bg-white hover:border-green-500 hover:cursor-pointer"> Search </div>
        <div>
          <input type="text" className="border rounded-md p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} placeholder="login" />
        </div>
      </div>
      <Link>Resturants</Link>
      <div className=" flex flex-wrap">
        {restData.map((item) => (
          <Link to={`/resturants/${item.info.id}`} key={item.info.id}>
            <RasturantCard resData={item.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
