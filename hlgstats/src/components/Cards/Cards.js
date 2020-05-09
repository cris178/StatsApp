import React from "react";
import "./Cards.css"

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            wl:"Loss",
            champ:"teemo",
            kills: 0,
            deaths:0,
            assissts:0,
        }
    }

    render(){
        return(
            <div className="Cards">
                <div className="winLoss">{this.state.wl}</div>
                <div className="champion">{this.state.champ}</div>
                <div className="kills">{this.state.kills}</div>
                <div className="deaths">{this.state.kills}</div>
                <div className="assissts">{this.state.assissts}</div>
            </div>
        );
    }
}

export default Cards;