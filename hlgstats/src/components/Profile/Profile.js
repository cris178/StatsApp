import React from "react";
import "./Profile.css"


class MatchHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
    }

    render(){
        return(
            <div className="Profile">
               <h1>{this.props.name}</h1>
               <h2>lvl{this.props.level}</h2>
            </div>
        );
    }
}

export default MatchHistory;