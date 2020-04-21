import React from 'react';
import Header from './components/Header/Header';
import Swipe from './components/Swipe/Swipe';
import logo from './logo.svg';
import {API} from "./RIOTAPI/RIOTAPI"
import './App.css';
import firebase from "./firebase";

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      startscreen: 1,
      stats: 0,
      keys: "0123"
    }

    this.statusCheck = this.statusCheck.bind(this);
  }

  
  componentDidMount(){
    //Enter Summoner Name;
    console.log(this.state.keys);
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

  statusCheck(response) {
    console.log("In Status Check");
    if (response.status != 200) {
      // If HTTP code is not 200 throw an error
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    } else {
      // Return the response if the API gives a code of 200
      return response;
    }
  }

  render(){
    const displayScreen = <div>
                          <Header />
                          <Swipe />
                        </div>;
    
    return (
                        <div className="App">
                          {displayScreen}
                          <p>Hello world</p>
                        </div>
    );
  }
}

{/*
Riot AI Disclaimer: 
[Your product] isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
*/}

export default App;
