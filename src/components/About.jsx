import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <hr />
        <UserClass name="First" city="Delhi (Class)" />
      </div>
    );
  }
}

export default About;
