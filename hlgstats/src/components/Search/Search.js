import React from "react";
import "./Search.css"


class Search extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log("Search Bar has Mounted.");
        
    }
    

    handleChange(event) {
        event.preventDefault();
        console.log("Logging Change In: " + event.target.name); //Shows which input is currently changging
        console.log(event.target.value); //Shows the value of that specific input bar
        this.setState({
          username: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = this.state.username;
        console.log("Submitted Username: " + data);
        this.props.passUp(data);
        //console.log(this.state.city);
    }



    render() {
        return (
          <div className="Search"  >
            <form id="search-form" >
                <div className="searchBar">
                    <input type="text" name="searchBar" className="round" placeholder="Search IGN" onChange={this.handleChange}/>
                    <input type="submit" className="corner" value="&#9906;" onClick={this.handleSubmit}/>
                </div>
            </form>
          </div>
        );
      }


}

export default Search;