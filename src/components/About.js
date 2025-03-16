import React from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { github } from "../utils/constants";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    console.log(" Parent constructor called");
  }

  async componentDidMount() {
    try {
      const server = await fetch(github);
      const res = await server.json();
      this.setState({ data: res });
    } catch (error) {
      console.log("Error Encountered", error);
    }
    console.log("CDM P called");
  }

  componentWillUnmount() {
    console.log("CWU called");
  }

  render() {
    console.log(" Parent render called");
    const { login, avatar_url } = this.state.data;
    return (
      <>
        <UserContext.Consumer>
          {({ loggedUser }) =>   <h1>{loggedUser}</h1>}
        </UserContext.Consumer>
        <h1>This is About Us Page !!!</h1>
        <UserClass type={"1st"} login={login} avatar={avatar_url} />
        <UserClass type={"2nd"} login={login} avatar={avatar_url} />
      </>
    );
  }
}

export default About;
