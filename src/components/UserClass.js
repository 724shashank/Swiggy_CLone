import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(" child constructor called")
  }
componentDidMount(){
    console.log("CDM called");
}
  render() {
    const { login, avatar,type } = this.props;
    console.log(" child render called")

    return (
      <>
      <h1>{type}</h1>
        <h1>{login}</h1>
        <img src={avatar} alt="image" />
      </>
    );
  }
}

export default UserClass;
