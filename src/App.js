import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicPlayer from './components/Music';
import Firefly from './components/Firefly';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playsong: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('hi')
  }

  render() {
    return (
      <div className="App">
        <Firefly onClick={this.handleClick}/>
        <MusicPlayer song={this.state.playsong} />
      </div>
    );
  }
}


export default App;
