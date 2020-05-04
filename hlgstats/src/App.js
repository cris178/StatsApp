import React from 'react';
import Header from './components/Header/Header';
import Swipe from './components/Swipe/Swipe';
import logo from './logo.svg';
import {API} from "./RIOTAPI/RIOTAPI"
import './App.css';
import firebase from "./firebase";
import MatchHistory from "./components/MatchHistory/MatchHistory";
import Profile from "./components/Profile/Profile"; 

class App extends React.Component{
  
  // Key
  //7A1161E44016535BB62A3235C65B77C6
  constructor(props){
    super(props);
    this.state={
      startscreen: 1,
      stats: 0,
      keys: "0123"
    }

    
  }

  
  async componentDidMount(){
    //Enter Summoner Name;
    console.log(this.state.keys);

    //const response = await fetch('https://ae6gzj3iye.execute-api.us-east-2.amazonaws.com/RiotStage').catch(()=>{return("Errror")});
    
    /*
    const world = firebase.functions().httpsCallable('hello');
    world().then(result =>{
      console.log(result.data);
      return("Finished without error");
    }).catch(()=>{
      console.log("catch");
      return("Caught and error");
    })*/
    /*reply().then(()=>{
      console.log("Local Promise: " )
      console.log(reply.data);
      return(console.log("Complete"));
    }).catch(()=>{
      return(console.log("Error Local"));
    })*/
    /*
    fetch("")
    .then(this.statusCheck)
    .then(function(res){
        console.log("Retrieval worked");
        return res.json();
      }).then(function(json){
        console.log(json);
        return json;
      }).catch((err) =>{
        console.log("Failed API retrieval")
      });
      */
    /*
    const world = firebase.functions().httpsCallable('hello');

    world().then(result =>{
      console.log("Promise Resolved");
      console.log("===: " + result.data);
    }).catch(result =>{
      console.log("Promise Rejected");
      console.log("Promise Rejected");
    });
    */
    /*
    const getNumber = firebase.functions().httpsCallable('number');
    getNumber().then(result =>{
      let numb = result.data;
      console.log("Displaying: " + numb);
    }).catch(function () {
      console.log("Promise Rejected");
  });*/
    
  }

  

  render(){
    let displayScreen = <div>
                          <Header />
                          <Swipe />
                        </div>;
    const checkScreen = this.state.startscreen;
    if(checkScreen === 1){

    }else if(checkScreen === 2){
      displayScreen = <div>
                        <MatchHistory />
                        <Profile />
                      </div>
    }
    
    return (
                        <div className="App">
                          {displayScreen}
                          <h2>League</h2>
                          <h2>Valorant</h2>
                          <h2>Rainbow Six</h2>
                        </div>
    );
  }
}

{/*
Riot AI Disclaimer: 
[Your product] isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
*/}

export default App;
