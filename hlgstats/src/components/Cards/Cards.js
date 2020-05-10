import React from "react";
import "./Cards.css"

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            wl:"Loss",
            champ:"",
            kills: 0,
            deaths:0,
            assissts:0,
            latestChampList: []
        }
    }

    async componentDidMount(){
        this.setState({
            champ: this.props.list[this.props.char].name
        });
    }


    render(){
        let role = this.props.role;
        role = role.replace("_", " ");
        
        return(
            <div className="Cards">
                <div className="winLoss">{this.state.wl}</div>
                <div className="champion">{this.state.champ}</div>
                <div className="role">{role}</div>
                <div className="score">{this.state.kills}/{this.state.deaths}/{this.state.assissts}</div>
            </div>
        );
    }
}

export default Cards;