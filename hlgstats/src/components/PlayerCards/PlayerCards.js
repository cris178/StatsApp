import React from "react";
import "./PlayerCards.css"

class PlayerCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="PlayerCards column orange" onClick={(() => { console.log(this.props.player); this.props.passUp(this.props.player) })}>
                <img className="cardCover" src={this.props.portrait}></img>
                <span aria-hidden="true" className="playerName">{this.props.name}</span>
                <span aria-hidden="true" className="Role">{this.props.role}</span>
            </div>
        );
    }
}

export default PlayerCards;