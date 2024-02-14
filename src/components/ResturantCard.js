const RasturantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="img"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.cloudinaryImageId
        }
      />
      <h3> {props.resname} </h3>
      <p> {props.cuisine.join(", ", " ")} </p>
      <h4>{props.avgRating} rating </h4>
      <h4> {props.slaString} </h4>
    </div>
  );
};

export default RasturantCard;
