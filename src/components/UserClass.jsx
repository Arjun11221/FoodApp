import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo : {
            name : "Dummy",
            location : "Default",
            avatar_url : "htp://dummy-photo.com"
        },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Arjun11221");
    const json = await data.json();

    this.setState({
        userInfo:json
    })
  }

  render() {
    const {name, location , avatar_url} = this.state.userInfo

    return (
      <div>
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default UserClass;
