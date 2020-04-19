import React from 'react';
import Header from './components/Header/Header';
import Swipe from './components/Swipe/Swipe';
import logo from './logo.svg';
import {API} from "./RIOTAPI/RIOTAPI"
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      startscreen: 1,
      stats: 0,
      keys: "0123"
    }


  }

  
  componentDidMount(){
    //Enter Summoner Name;
    console.log(this.state.keys);
    const getSummoner = firebase.functions().httpsCallable('getSummoner');
    getSummoner().then(results => {
      console.log(results.data);
    });
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
