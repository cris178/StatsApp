import React from 'react';
import './Hamburger.css';

class Hamburger extends React.Component{


    constructor(props){
        super(props);
        this.state ={
            enter: 0
        };
       this.handleHover = this.handleHover.bind(this);
       this.handleLeave = this.handleLeave.bind(this);
    }

    handleHover(){
        console.log("Hovering Hamburger")
        this.setState({
            enter: 1
        });
        return;
    }
    handleLeave(){
        this.setState({
            enter: 0
        });
        return;
    }
    
    

    render(){

        var background = "white";
        if(this.state.enter){
            background = "#698EBF"
        }
        return(
            <div className="Hamburger" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
                <div className="line" style={{backgroundColor:background}}></div>
                <div className="line" style={{backgroundColor:background}}></div>
                <div className="line" style={{backgroundColor:background}}></div>
            </div>

        );
    }
}

export default Hamburger;