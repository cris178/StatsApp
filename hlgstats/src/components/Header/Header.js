import React from 'react';
import "./Header.css"
import Logo from './Images/HLG_LOGO.png'

class Header extends React.Component{

    render(){

        return(
            <div className= "Header">
                <ul>
                    <li className="left"><img  classname = "responsive" src={Logo} alt="Highlander Gaming Logo" width="100px" height="60px"></img></li>
                    <li className="right"><img classname = "responsive" src={Logo} alt="Menu" alt="Highlander Gaming Logo"  width="100px" height="60px"></img></li>
                </ul>
            </div>
        );
    }
}

export default Header;