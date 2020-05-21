import React from "react";
import "./Cards.css"
import LogoBack from "./LogoDark.png";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wl: "Loss",
            champ: "",
            kills: 0,
            deaths: 0,
            assissts: 0,
            latestChampList: []
        }
    }

    async componentDidMount() {


        console.log("Component Cards Did Mount: Getting Post Match Data");

        let ending = "?key1=3&key2=".concat(this.props.matchID);
        const res = await fetch("" + ending).catch((err) => {
            console.log(err);
        })
        const json = await res.json();
        let body = json.body;
        let obj = await JSON.parse(body);


        //console.log(obj);

        let team;
        let part;
        let stats = {};
        for (var participant in obj.participants) {
            if (obj.participants[participant].championId === this.props.char) {
                team = await obj.participants[participant].teamId;
                part = await obj.participants[participant].participantId;
                stats = await obj.participants[participant].stats;
            }
        }

        let win;
        if (obj.teams[0].teamId === team) {
            win = await obj.teams[0].win;
        } else {
            win = await obj.teams[1].win
        }

        let kill = await stats.kills;
        let death = await stats.deaths;
        let assist = await stats.assists;

        let winners = 0;
        if (win === "Fail") {
            win = "Defeat";
        } else {
            win = "Victory"
            winners++;
        }

        let cname = await this.props.list[this.props.char].name;
        this.setState({
            champ: cname,
            wl: win,
            kills: kill,
            deaths: death,
            assissts: assist

        });

        let matchData = { kills: kill, deaths: death, assists: assist, wins: winners };
        console.log("Passing Up in Cards: " + matchData.deaths);
        this.props.passUp(matchData);
    }


    render() {
        let role = this.props.role;
        role = role.replace("_", " ");
        if (role === "NONE") {
            role = "JUNGLE";
        }


        return (
            <div className="Cards">
                <img src={"http://raw.communitydragon.org/10.1/game/assets/characters/" + this.state.champ + "/hud/" + this.state.champ + "_circle.png"} width="70px" height="70px" alt={this.state.champ + "UCR HLG Esports"}></img>
                <div className="winLoss">{this.state.wl}</div>
                <div className="champion">{this.state.champ}</div>
                <div className="role">{role}</div>
                <div className="score">{this.state.kills}/{this.state.deaths}/{this.state.assissts}</div>
            </div>
        );
    }
}

export default Cards;