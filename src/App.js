import React from "react";
import "./App.css";
import { Component } from "react";

let defaultStyle = {
  color: "black",
};

let fakeServerData = {
  user: {
    name: "Ask",
    playlists: [
      {
        name: "My favorites",
        songs: [
          { name: "Beat It", duration: 1234 },
          { name: "Cannelioni Makaroni", duration: 1032 },
          { name: "Rosa helikopter", duration: 749 },
        ],
      },
      {
        name: "My favorites",
        songs: [
          { name: "Beat It", duration: 1234 },
          { name: "Cannelioni Makaroni", duration: 1032 },
          { name: "Rosa helikopter", duration: 749 },
        ],
      },
      {
        name: "My favorites",
        songs: [
          { name: "Beat It", duration: 1234 },
          { name: "Cannelioni Makaroni", duration: 1032 },
          { name: "Rosa helikopter", duration: 749 },
        ],
      },
      {
        name: "My favorites",
        songs: [
          { name: "Beat It", duration: 1234 },
          { name: "Cannelioni Makaroni", duration: 1032 },
          { name: "Rosa helikopter", duration: 749 },
        ],
      },
    ],
  },
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{Math.round(totalDuration / 60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img alt="Search" />
        <input type="text" />
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "25%" }}>
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

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle, "font-size": "54px" }}>
              {this.state.serverData.user.name}'s playlists
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
