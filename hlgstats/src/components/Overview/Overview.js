import React from "react";
import "./Overview.css";

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winsPercent: 0,
            kdr: 0,
            kda: 0,
            loss: 0
        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.deaths !== this.props.deaths) {

            //console.log("Kills: " + this.props.kills);
            //console.log("Deaths: " + this.props.deaths);
            //console.log("Assissts: " + this.props.assists);

            let winPercentage = 0;
            let killdr = 0;
            let killda = 0;
            let l = (10 - this.props.wins);
            let d = this.props.deaths;

            if (d > 0) {
                winPercentage = (this.props.wins / 10);
                killdr = (this.props.wins / d);
                killda = ((this.props.kills + this.props.assists) / d);
            }

            this.setState({
                winsPercent: winPercentage,
                kdr: killdr,
                kda: killda,
                loss: l
            });
        }
    }

    render() {


        return (
            <div className="Overview">
                <h2>OVERVIEW</h2>
                <div className="Win Over-Sub">
                    <p>Wins </p>
                    <p>{this.props.wins}</p>
                </div>
                <div className="WinPercent Over-Sub">
                    <p>Win %</p>
                    <p>{this.state.winsPercent.toFixed(2)}%</p>
                </div>
                <div className="KDA Over-Sub">
                    <p>KDA</p>
                    <p>{this.state.kda.toFixed(2)}%</p>
                </div>
                <div className="KDR Over-Sub">
                    <p>KDR</p>
                    <p>{this.state.kdr.toFixed(2)}%</p>
                </div>
                <div className="Kills Over-Sub">
                    <p>Kills</p>
                    <p>{this.props.kills}</p>
                </div>
                <div className="Deaths Over-Sub">
                    <p>Deaths</p>
                    <p>{this.props.deaths}</p>
                </div>
                <div className="Assists Over-Sub">
                    <p>Assissts</p>
                    <p>{this.props.assists}</p>
                </div>
            </div>
        );
    }
}

export default Overview;