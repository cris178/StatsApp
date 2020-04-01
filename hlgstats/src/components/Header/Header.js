import React from 'react';
import "./Header.css";
import "./Hamburger/Hamburger";
import Hamburger from './Hamburger/Hamburger';

class Header extends React.Component{

    render(){

        return(
            <div className= "Header">
                <ul>
                    <h1 className="left ">HLG <span className="blue">Stats</span></h1>
                    <Hamburger />
                   
                </ul>
            </div>
        );
    }
}

export default Header;