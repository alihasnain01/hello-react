const RasturantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="img"
        className="res-logo"
        src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
      />
      <h3> {props.resname} </h3>
      <p> {props.cuisine} </p>
      <h4> 4.4 rating </h4>
      <h4> 30 min </h4>
    </div>
  );
};

export default RasturantCard;
