import React from 'react';
import "./Header.css";
import "./Hamburger/Hamburger";
import Hamburger from './Hamburger/Hamburger';
import Search from "../Search/Search"
import Anime, { anime } from 'react-anime';

class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
            ign: "",
            counter: 0,
            teams: ["League of Legends", "Valorant"]
        };
        this.handleClick = this.handleClick.bind(this);
        this.setIGN = this.setIGN.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        //Added a Timer ID to this because doesn't necessarily work with props or state
        this.timer = setInterval(
            () => this.tick(),
            3000
        );
    }

    handleClick() {
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
        this.props.passUp(arg);
    }

    tick() {
        console.log("TICK");
        if (this.state.counter !== (this.state.teams.length - 1)) {
            this.setState({
                counter: this.state.counter + 1
            });
        } else {
            this.setState({
                counter: 0
            });
        }

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        var standardHeader = <ul>
            <h1 className="left ">HLG</h1>
        </ul>;
        if (this.state.clicked === 1) {
            standardHeader = <Search passUp={this.setIGN} />
        }

        let teams = this.state.teams[Math.floor((Math.random() * 2) + 0)]

        return (
            <div className="Header">
                <div className="left">
                    <h1><span>HIGHLANDER</span></h1>
                    <h1><span>GAMING</span></h1>
                    <h1><span>STATS</span></h1>
                </div>
                <div className="right">
                    <Anime opacity={[0, 1]} translateY={[-20, 0]}><div className="teams">{this.state.teams[this.state.counter]} </div></Anime>
                </div>
            </div>
        );
    }
}
/*
<div className="searchIcon" onClick={this.handleClick}>&#9906;</div>
<Hamburger />
    */

export default Header;