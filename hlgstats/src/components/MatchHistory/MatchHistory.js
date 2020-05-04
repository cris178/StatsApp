import React from "react";
import Cards from "../Cards/Cards";

class MatchHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
    }


    render(){
        return(
            <div>
                <Cards></Cards>
            </div>
        );
    }
}

export default MatchHistory;