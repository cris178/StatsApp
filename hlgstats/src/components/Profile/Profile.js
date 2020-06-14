import React from "react";
import "./Profile.css"


class MatchHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }

    render() {
        return (
            <div className="Profile">
                <div className="backButton" onClick={(() => { this.props.passUp(1) })}>˹</div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.player.position}</h2>
                <h2>lvl{this.props.level}</h2>
            </div>
        );
    }
}

export default MatchHistory;