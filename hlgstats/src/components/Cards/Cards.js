import React from "react";

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
            <div>
                <div className="WinLoss">{this.state.wl}</div>
                <div className="champion">{this.state.champ}</div>
                <div className="kills">{this.state.kills}</div>
                <div className="deaths">{this.state.kills}</div>
                <div className="assissts">{this.state.assissts}</div>
            </div>
        );
    }
}

export default Cards;