const RasturantCard = (props) => {
  const { resData } = props;
  return (
    <div className="border rounded-lg bg-gray-50 p-2 w-48" >
      <img
        alt="img"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3> {resData.name} </h3>
      <p> {resData.cuisines.join(", ", " ")} </p>
      <h4>{resData.avgRating} rating </h4>
      <h4> {resData.sla.slaString} </h4>
    </div>
  );
};

export default RasturantCard;
