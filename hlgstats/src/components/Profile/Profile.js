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
               <h1>Name</h1>
            </div>
        );
    }
}

export default MatchHistory;