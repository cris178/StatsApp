import React from 'react';
import "./Header.css";
import "./Hamburger/Hamburger";
import Hamburger from './Hamburger/Hamburger';
import Search from "../Search/Search"

class Header extends React.Component{


    constructor(props){
        super(props);
        this.state ={
            clicked: 0,
            ign: ""
        };
       this.handleClick = this.handleClick.bind(this);
       this.setIGN = this.setIGN.bind(this);
    }

    handleClick(){
        console.log("Search Clicked")
        this.setState({
            clicked: 1
        });
        return;
    }

    setIGN(arg) {
        //Can't console log after doesn't show up as updated until after
        console.log("Setting State IGN: " + arg);
        this.setState({
          ign: arg,
          clicked: 0
        });
    }

    render(){
        var standardHeader = <ul>
                                <h1 className="left ">HLG <span className="blue">STATS</span>
                                </h1><div className="searchIcon" onClick={this.handleClick}>&#9906;</div>
                                <Hamburger />
                            </ul>;
        if(this.state.clicked === 1){
            standardHeader = <Search passUp={this.setIGN}/>
        }
        return(
            <div className= "Header">
                {standardHeader}
            </div>
        );
    }
}

export default Header;