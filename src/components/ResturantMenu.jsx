import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const ResturantMenu = () => {

  const restId = useParams();
  const restInfo = useRestrauntMenu(restId);
  return (
    <div className="menu">
      <h1>Name of resturant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
