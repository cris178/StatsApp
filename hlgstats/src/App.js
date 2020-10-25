import React from 'react';
import Header from './components/Header/Header';
import Swipe from './components/Swipe/Swipe';
import PlayerCards from './components/PlayerCards/PlayerCards';
import logo from './logo.svg';
import './App.css';
import firebase from "./firebase";
import MatchHistory from "./components/MatchHistory/MatchHistory";
import Profile from "./components/Profile/Profile";
import Overview from "./components/Overview/Overview";
import { fireEvent } from '@testing-library/react';

/*
Add Player Images Below
Photo Shoot         
Player Cut Out:    
slide background:

The images must be in the Images folder, copy their name in format as seen below.
*/
import player1 from "./Images/Ezekiel_Kang_AD_Carry.png";
import portrait1 from "./Images/EzekielKang.jpg";
import banner1 from "./Images/apha.png";

import banner2 from "./Images/reksai.png";
import player2 from "./Images/Calvin-Nguyen-Portrait.png"
import portrait2 from "./Images/CalvinNguyen.jpg";

import banner3 from "./Images/sylas.png";
import player3 from "./Images/Jake-Han-Portrait.png";
import portrait3 from "./Images/JakeHan.jpg";

import banner4 from "./Images/sylas.png";
import player4 from "./Images/Peter-Nguyen-Portrait.png";
import portrait4 from "./Images/PeterNguyen.jpg";

import banner5 from "./Images/Kled.png";
import player5 from "./Images/Ryan-Mealio-Portrait.png";
import portrait5 from "./Images/RyanMealio.jpg";

/*
Kevin Kim not on team?
import player5 from "./Images/Kevin-Kim-Portrait.png";
import portrait5 from "./Images/KevinKim.png";
*/


class App extends React.Component {

  // Key
  //7A1161E44016535BB62A3235C65B77C6
  constructor(props) {
    super(props);
    this.state = {
      startscreen: 1,
      //The values here will be passed to the profile on click of a slider or card
      stats: 0,
      player: [],
      name: "default",
      ign: "default",
      role: "default",
      accID: "temp",
      level: "0",
      //These are passed to the overview
      kills: 0,
      deaths: 0,
      assists: 0,
      wins: 0,
      members: ([
        {
          LeagueA: [
            {
              name: "Ezekiel Kang",
              ign: "Faker",
              team: "League of Legends",
              position: "AD Carry",
              image: player1,
              portrait: portrait1,
              backgroundImage: banner1
            },
            {
              name: "Calvin Nguyen",
              ign: "sketch",
              team: "League of Legends",
              position: "Jungle",
              image: player2,
              portrait: portrait2,
              backgroundImage: banner2
            },
            {
              name: "Joonho Jake Han",
              ign: "LDCs",
              team: "League of Legends",
              position: "Mid",
              image: player3,
              portrait: portrait3,
              backgroundImage: banner3
            },
            {//IGN Not Working in OP.GG
              name: "Peter Nguyen",
              ign: "HaikusfromBuddah",
              team: "League of Legends",
              position: "Support",
              image: player4,
              portrait: portrait4,
              backgroundImage: banner2
            },
            {
              name: "Ryan Vincent Mealio",
              ign: "Themealio1",
              team: "League of Legends",
              position: "Top",
              image: player5,
              portrait: portrait5,
              backgroundImage: banner5
            }
          ],
          Valorant: [
            {
              name: "Brain",

            },
            {

            }
          ]

        }
      ])
    }
    this.getIGN = this.getIGN.bind(this);
    this.getAverage = this.getAverage.bind(this);
    this.setView = this.setView.bind(this);

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


  /*This sets the player that is selected. The selected player's pointer is passed in as arg*/
  getIGN(arg) {
    console.log("Getting IGN");
    //Remove spaces in GamerTag
    let ign = arg.ign;
    ign = ign.replace(/\s/g, '');
    //Check Lambda function to see what key1 retrieves
    let ending = "?key1=1&key2=".concat(ign);
    console.log(ending);
    //AWS ohio gatewaymanagement test
    fetch("" + ending).then(response => response.json()).then(json => {
      let body = json.body;
      let obj = JSON.parse(body);
      console.log("Seeing JSON RESULTS: \n" + obj.accountId);
      //Get the name to
      this.setState({
        player: arg,
        name: arg.name,
        ign: obj.name,
        role: arg.position,
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
      return;
    })
  }

  getAverage(arg) {

    //console.log("Getting Average");
    this.setState({
      kills: arg.kills,
      deaths: arg.deaths,
      assists: arg.assists,
      wins: arg.wins
    });

  }


  setView(arg) {
    this.setState({
      startscreen: arg
    })
  }
  //p1={this.state.members[0].LeagueA[0]} 
  render() {

    //Get Players to be Displayed in Front Page Slides
    let randomPlayer = [0, 1, 2, 3, 4];
    for (let i = 0; i < randomPlayer.length; i++) {
      //console.log(i);
      //Const is important because it changes in javascript for some reason.
      const rand = Math.floor((Math.random() * 5) + 0);
      const hold = randomPlayer[i];
      //console.log("Swapping " + rand + " and " + hold);
      randomPlayer[i] = randomPlayer[rand];
      randomPlayer[rand] = hold;
      //console.log(randomPlayer);
    }
    console.log("Randomized:" + randomPlayer);

    //Use RandomPlayer as a list of random numbers to select 5 players to put in main hero slide
    let slideP1 = this.state.members[0].LeagueA[randomPlayer[0]];
    let slideP2 = this.state.members[0].LeagueA[randomPlayer[1]];
    let slideP3 = this.state.members[0].LeagueA[randomPlayer[2]];
    let slideP4 = this.state.members[0].LeagueA[randomPlayer[3]];
    let slideP5 = this.state.members[0].LeagueA[randomPlayer[4]];


    let displayScreen;
    const checkScreen = this.state.startscreen;

    //Decide which screen to display. Either Home Screen or Player Profile Page
    if (checkScreen === 1) {

      displayScreen = <div className="block">
        <Header passUp={this.getIGN} />
        <Swipe passUp={this.getIGN} p1={slideP1} p2={slideP2} p3={slideP3} p4={slideP4} p5={slideP5} />
        <div className="League">
          <h2>League</h2>
          <div className="Players">
            {this.state.members[0].LeagueA.map((keyVal, index) => {
              return <PlayerCards key={index} name={keyVal.name} passUp={this.getIGN} player={keyVal} portrait={keyVal.portrait} role={keyVal.position} />
            })}
          </div>
        </div>
        <h2>Valorant</h2>
        <h2>Rainbow Six</h2>
      </div>
    } else if (checkScreen === 2) {

      displayScreen = <div className="flexInit" ref={this.myRef}>
        <MatchHistory passUp={this.getAverage} account={this.state.accID} champList={this.state.champs} />
        <Profile name={this.state.name} passUp={this.setView} level={this.state.level} player={this.state.player} />
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
