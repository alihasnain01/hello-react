import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 1,
    };

    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  render() {
    const { name } = this.props;
    const { count1 } = this.state;

    console.log("child render");

    return (
      <div>
        <h1>Name: {name}</h1>
        <p>count1: {count1}</p>
        <button
          onClick={() => {
            // never update directly in class component
            this.setState({ count1: count1 + 1 });
          }}
        >
          increase count
        </button>
        <h2>Age: 25</h2>
        <h3>Gender: Male</h3>
      </div>
    );
  }
}

export default UserClass;
