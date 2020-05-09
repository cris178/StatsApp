import React from 'react';
import Header from './components/Header/Header';
import Swipe from './components/Swipe/Swipe';
import logo from './logo.svg';
import './App.css';
import firebase from "./firebase";
import MatchHistory from "./components/MatchHistory/MatchHistory";
import Profile from "./components/Profile/Profile"; 
import axios from "axios";

class App extends React.Component{
  
  // Key
  //7A1161E44016535BB62A3235C65B77C6
  constructor(props){
    super(props);
    this.state={
      startscreen: 1,
      stats: 0,
      accID:"temp",
      matchHistory:[]
    }
    this.getIGN = this.getIGN.bind(this);
    //this.getMatchHistory = this.getMatchHistory.bind(this);
  }

  
  async componentDidMount(){
    //Enter Summoner Name;
    console.log(this.state.keys);
    
  }
  
  getIGN(arg){
    console.log("Getting IGN");
    //Check Lambda function to see what key1 retrieves
    let ending = "?key1=1&key2=".concat(arg);
    console.log(ending);
    fetch("amazon api gateway"+ending).then(response=>response.json()).then(json=>{
      let body = json.body;
      let obj = JSON.parse(body);
      console.log("Seeing JSON RESULTS: \n" + obj.accountId);
      //Get the name to
      this.setState({
        accID: obj.accountId,
        startscreen: 2
      });
      
    }).catch((err)=>{
      console.log("Error Occured: " + err);
    })
  }

  render(){
    let displayScreen; 
    const checkScreen = this.state.startscreen;
    if(checkScreen === 1){
      displayScreen =   <div>
                          <Header passUp={this.getIGN}/>
                          <Swipe />
                          <h2>League</h2>
                          <h2>Valorant</h2>
                          <h2>Rainbow Six</h2>
                        </div>;
    }else if(checkScreen === 2){
      displayScreen = <div className="flexInit">
                        <MatchHistory account={this.state.accID}/>
                        <Profile />
                      </div>
    }
    console.log("AccouintID: " + this.state.accID);
    
    console.log("Match History: ");
    /*if(check !== "temp"){
      this.getMatchHistory();

    }*/
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
