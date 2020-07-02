import React from 'react';
import './App.css';
import { Component } from 'react';

let defaultTextColor = "black";
let defaultStyle = {
  color: defaultTextColor
}

class Aggregate extends Component {
  render(){
    return(
      <div style={{...defaultStyle, width:"40%", display: "inline-block"}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return (
      <div style={defaultStyle}>
        <img alt="Search"/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return(
      <div style={{...defaultStyle, display: "inline-block", width: "25%"}}>
        <img />
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App" style={defaultStyle}>
      <h1>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  );
}

export default App;
