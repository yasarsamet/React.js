import React, { Component } from "react";
import Searchbar from './Searchbar'
import AppCss from "./app.css"
import axios from "axios";
import Images from './Images'


class  App extends Component {

  state = {
    images : []
  };

  onSearchImage = async (search) => {
    await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: search
    },
    headers: {
        Authorization: 'Client-ID kKrZV1EGBsGId_L68JnOqBYIeSCN661Rf4GSP0JjxeI'
    }
  }).then((result) => {
    this.setState({
      images: result.data.results
    });
  }).catch((error) => {
    console.log(error);
  })
  }
  render() {
    return(
      <div className="app-container">
        <Searchbar onSearchImage={this.onSearchImage} />
        <br />
        <Images images= {this.state.images} />
      </div>
    )
  }
  
}

export default App;
