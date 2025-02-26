import React from "react";

import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{},
        }
        console.log(" Parent constructor called")
    }

    async  componentDidMount(){
        try{

        const server = await fetch("https://api.github.com/users/724shashank");
        const res = await server.json();
        this.setState({data:res});
        }
        catch(error){
            console.log("Error Encountered",error);
        }
      console.log("CDM P called");
        }

        componentWillUnmount(){
            console.log("CWU called");
        }

    render(){
        console.log(" Parent render called")
const {login , avatar_url} = this.state.data;
        return (
            <>
            <h1>This is About Us Page !!!</h1>
         
            <UserClass type={"1st"} login={login} avatar={avatar_url} />
            <UserClass type={"2nd"} login={login} avatar={avatar_url} />
            
        
            </>
        ) ;
    }
}



export default About;