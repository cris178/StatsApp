import React from "react";
import "./Overview.css";

class Overview extends React.Component{
    constructor(props){
        super(props);
        this.state={
            winsPercent : 0,
            kdr: 0,
            kda: 0,
            loss: 0
        }
    }
    async componentDidMount(){
        
    }

    async componentDidUpdate(prevProps, prevState){
        if (prevProps.deaths !== this.props.deaths) {

            //console.log("Kills: " + this.props.kills);
            //console.log("Deaths: " + this.props.deaths);
            //console.log("Assissts: " + this.props.assists);

            let winPercentage = 0;
            let killdr = 0;
            let killda = 0;
            let l = (10 - this.props.wins);
            let d = this.props.deaths;

            if(d > 0){
                winPercentage = (this.props.wins / 10);
                killdr = (this.props.wins / d);
                killda = ((this.props.kills+this.props.assists)/d);
            }

            this.setState({
                winsPercent : winPercentage,
                kdr: killdr,
                kda: killda,
                loss: l
            });
        }
    }

    render(){

        
        return(
            <div className="Overview">
                <div className="WinPercent">
                    {this.state.winsPercent.toFixed(2)}%
                </div>
                <div className="Kills">
                    {this.props.kills}
                </div>
                <div className="KDA">
                    {this.state.kda.toFixed(2)}%
                </div>
                <div className="KDR">
                    {this.state.kdr.toFixed(2)}%
                </div>
                <div className="Win">
                    {this.props.wins}
                </div>
                <div className="Deaths">
                    {this.props.deaths}
                </div>
                <div className="Loss">
                    {this.state.loss}
                </div>
            </div>
        );
    }
}

export default Overview;