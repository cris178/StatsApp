import React from "react";
import "./Profile.css"


class MatchHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ""
        }
    }
    componentDidMount() {
        let rand = Math.floor((Math.random() * 2) + 0);
        if (rand === 0) {
            this.setState({
                color: "Profile orange column"
            });

        } else if (rand === 1) {
            this.setState({
                color: "Profile blue-red column"
            });
        }
    }

    render() {


        return (
            <div className={this.state.color} >
                <img className="cardCover" src={this.props.player.portrait}></img>
                <div className="backButton" onClick={(() => {
                    setTimeout(() => {
                        this.props.passUp(1);
                    }, 1000);
                })}>◸</div>
                <div className="profileText">{this.props.name}</div>
                <div className="profileTextTwo">{this.props.player.position}</div>
                <div className="profileTextThree">lvl {this.props.level}</div>
            </div>
        );
    }
}

export default MatchHistory;