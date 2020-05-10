import React from "react";
import Cards from "../Cards/Cards";
import "./MatchHistory.css"

class MatchHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            accID: "temp",
            data: "",
            char: "",
            matchHistory: [],
            role: "",
        }
    }

    async componentDidMount(){
        /***Retrieve the last 10 matches*****/
        
        console.log("Getting Match History");
        let ending = "?key1=2&key2=".concat(this.props.account);
        const res = await fetch("aws api"+ending).catch((err)=>{
            console.log(err);
        })
        const json = await res.json();
        let body = json.body;
        let obj = await JSON.parse(body);
        const matches = obj.matches;
        console.log("In GetHistory: " + matches);

        this.setState({
            matchHistory: matches,
            accID: "temp"
        })
        
    }

  

    render(){
        console.log(this.state.matchHistory);
        
        return(
            <div className ="MatchHistory">
            {this.state.matchHistory.map((match,index)=>{
                return (<Cards key={index} char={match.champion} role={match.role} list={this.props.champList}/>)
            })}
            </div>
        );
    }
}

export default MatchHistory;