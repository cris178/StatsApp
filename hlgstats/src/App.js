import React from 'react';
import Header from './components/Header/Header';
import Swipe from './components/Swipe/Swipe';
import logo from './logo.svg';
import './App.css';
import firebase from "./firebase";
import MatchHistory from "./components/MatchHistory/MatchHistory";
import Profile from "./components/Profile/Profile";
import Overview from "./components/Overview/Overview";
import { fireEvent } from '@testing-library/react';
import player1 from "./Images/Ezekiel_Kang_AD_Carry.png";

class App extends React.Component {

  // Key
  //7A1161E44016535BB62A3235C65B77C6
  constructor(props) {
    super(props);
    this.state = {
      startscreen: 1,
      stats: 0,
      name: "default",
      accID: "temp",
      level: "0",
      champs: [],
      kills: 0,
      deaths: 0,
      assists: 0,
      wins: 0,
      members: ([
        {
          LeagueA:
          {
            name: "Ezekiel Kang",
            ign: "ezepoon",
            team: "League of Legends",
            position: "AD Carry",
            image: player1
          }


        }
      ])
    }
    this.getIGN = this.getIGN.bind(this);
    this.getAverage = this.getAverage.bind(this);
    //this.getMatchHistory = this.getMatchHistory.bind(this);
  }


  async componentDidMount() {
    //Enter Summoner Name;

    let championByIdCache = {};
    let championJson = {};


    let language = "en_US"

    let versionIndex = 0;
    let response;

    //Test to see which version works, public API's by Riot to get champion data
    do {
      const version = (await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((res) => res.json()))[versionIndex++];
      response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
    } while (!response.ok)
    championJson = await response.json();
    console.log("Champion List: " + championJson.data.Ahri.key);


    //This is some shit right here
    championByIdCache = [];//array
    for (var championName in championJson.data) {
      //Has own property checks to see if object key is in the object. Returns boolean
      if (!championJson.data.hasOwnProperty(championName))
        break;
      let holder = championName.toString();
      const champInfo = championJson.data[holder];
      championByIdCache[champInfo.key] = champInfo;
    }

    this.setState({
      champs: championByIdCache
    })
  }



  getIGN(arg) {
    console.log("Getting IGN");
    //Check Lambda function to see what key1 retrieves
    let ending = "?key1=1&key2=".concat(arg);
    console.log(ending);
    fetch("https://w8bzyasuzf.execute-api.us-east-2.amazonaws.com/Riot" + ending).then(response => response.json()).then(json => {
      let body = json.body;
      let obj = JSON.parse(body);
      console.log("Seeing JSON RESULTS: \n" + obj.accountId);
      //Get the name to
      this.setState({
        name: obj.name,
        accID: obj.accountId,
        level: obj.summonerLevel,
        startscreen: 2,
        kills: 0,
        deaths: 0,
        assists: 0,
        wins: 0
      });

    }).catch((err) => {
      console.log("Error Occured: " + err);
    })
  }

  getAverage(arg) {
    console.log("Getting Average");
    this.setState({
      kills: arg.kills,
      deaths: arg.deaths,
      assists: arg.assists,
      wins: arg.wins
    });

  }
  //p1={this.state.members[0].LeagueA[0]} 
  render() {
    let displayScreen;
    const checkScreen = this.state.startscreen;
    if (checkScreen === 1) {
      displayScreen = <div className="block">
        <Header passUp={this.getIGN} />
        <Swipe passUp={this.getIGN} p1={this.state.members[0].LeagueA} />
        <h2>League</h2>
        <h2>Valorant</h2>
        <h2>Rainbow Six</h2>




      </div>;
    } else if (checkScreen === 2) {
      displayScreen = <div className="flexInit">
        <MatchHistory passUp={this.getAverage} account={this.state.accID} champList={this.state.champs} />
        <Profile name={this.state.name} level={this.state.level} />
        <Overview kills={this.state.kills} deaths={this.state.deaths} assists={this.state.assists} wins={this.state.wins} />
      </div>
    }
    //console.log("AccountID: " + this.state.accID);

    return (
      <div className="App">
        {displayScreen}
      </div>
    );
  }
}

{/*
Riot AI Disclaimer: 
[Your product] isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
*/}

export default App;
