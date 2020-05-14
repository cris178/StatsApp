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
            kills: 0,
            deaths: 0,
            assists: 0,
            wins: 0
        }
        this.getAvg = this.getAvg.bind(this);
    }

    async componentDidMount(){
        /***Retrieve the last 10 matches*****/
        
        console.log("Getting Match History");
        let ending = "?key1=2&key2=".concat(this.props.account);
        const res = await fetch(""+ending).catch((err)=>{
            console.log(err);
        })
        const json = await res.json();
        let body = json.body;
        let obj = await JSON.parse(body);
        const matches = obj.matches;
        console.log("In GetHistory: " + matches);

        this.setState({
            kills: 0,
            deaths: 0,
            assists: 0,
            wins: 0,
            matchHistory: matches,
            accID: "temp"
        })
        
    }

    async componentDidUpdate(){

    

        
    }

    getAvg(arg){
        console.log("Getting Average");
        this.setState((state) => ({
            kills: state.kills + arg.kills,
            deaths: state.deaths + arg.deaths,
            assists: state.assists + arg.assists,
            wins: state.wins + arg.wins
        }));

        let score = {
            kills: this.state.kills ,
            deaths: this.state.deaths ,
            assists: this.state.assists ,
            wins: this.state.wins
        }
        console.log("MatchHistory Passing Up: "+ score.deaths);
        this.props.passUp(score);
        
    }
  

    render(){
        //console.log(this.state.matchHistory);
        
        return(
            <div className ="MatchHistory">
            {this.state.matchHistory.map((match,index)=>{
                return (<Cards key={index} char={match.champion} role={match.role} list={this.props.champList} matchID={match.gameId} passUp={this.getAvg}/>)
            })}
            </div>
        );
    }
}

export default MatchHistory;