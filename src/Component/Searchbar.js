import React, { Component } from "react";
import AppCss from "./app.css";

class Searchbar extends Component {
    
    state = {
        search:''
    };

    inputChange (event) {
        this.setState({
            search:event.target.value
        });
    }
    searchImage =  () => {
                console.log("Başarılı");
                this.props.onSearchImage(this.state.search);
    }
    render () {
        return (
            <div className="search-bar-container ui input">
                 <input type="text" onKeyPress={(e) => {
                     if(e.key === 'Enter') {
                         this.searchImage();
                     }
                 }} placeholder="Searchh...." onChange={this.inputChange.bind(this)} />
                 <button className="ui icon button" onClick={this.searchImage} >
                     <i className="search icon"></i>
                 </button>
            </div>
        )
    }
    
}

export default Searchbar;