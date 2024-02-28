import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <User name={"Ali (functional)"} />
      <UserClass name={"Ali (class)"} />
    </div>
  );
};

export default About;
