import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicPlayer from './components/Music';
import Firefly from './components/Firefly';

const bugs = [{ id: 1, bugSong: 1 }, { id: 2, bugSong: 2 }];


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bugSong: "https://open.spotify.com/embed/track/5rX6C5QVvvZB7XckETNych"
    }
    this.clickBug = this.clickBug.bind(this)
  }

  clickBug(url) {
    this.setState({bugSong: url})
  }


  render() {
    return (
      <div className="App">
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/6PUIzlqotEmPuBfjbwYWOB")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/30ZGbfPsjDNCgL21Qzciuj")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/20XdEFyaUR9C7aDIdq2OAd")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/5BmagRD7Thki6O1zZwbxBy")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/1AeKqTY9v9ZnnvoIrbSa5E")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/7uYroF9RRrhRJBrigRvB6H")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/7b71WsDLb8gG0cSyDTFAEW")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/1KcnJTiXJXAqW5bB7zpkBC")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/1td7gSf8cdWKZBLVtsRnYP")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/4mAqG6KNWZQiekSthr2QtL")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/0acQgAidYiiSWQrPZHHkzo")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/7AzFID6u1b3zIWbd9pb8Dk")} />
        <Firefly onClick={()=>this.clickBug('dog')} />
        <Firefly onClick={()=>this.clickBug('dog')} />
        <MusicPlayer player={this.state.bugSong}/>

      </div>
    );
  }
}


export default App;
