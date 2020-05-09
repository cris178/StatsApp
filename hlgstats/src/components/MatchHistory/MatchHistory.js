import React from "react";
import Cards from "../Cards/Cards";
import "./MatchHistory.css"

class MatchHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
    }

    async componentDidMount(){
        console.log("Getting Match History");
        let ending = "?key1=2&key2=".concat(this.props.account);
        const res = await fetch("amazon api"+ending).catch((err)=>{
            console.log(err);
        })
        const json = await res.json();
        let body = json.body;
        let obj = JSON.parse(body);
        console.log("In GetHistory: " + obj.matches);
        this.setState({
            matchHistory: obj.matches,
            accID: "temp"
        })
    }

    render(){
        console.log(this.state.matchHistory);
        return(
            <div className ="MatchHistory">
                <Cards></Cards>
            </div>
        );
    }
}

export default MatchHistory;