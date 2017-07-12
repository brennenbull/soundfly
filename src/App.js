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
        <span className="heading">SoundFly</span>
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
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/1ZWIQXfAquWtLDK5aOUczS")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/5rX6C5QVvvZB7XckETNych")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/3xY3mqQsnLqye9nWmXlo0t")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/59WTZPf9NQqv3PPSxwDTJq")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/79u7wxpk5WvcLqiOPj94c2")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/3zBhihYUHBmGd2bcQIobrF")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/5IMtdHjJ1OtkxbGe4zfUxQ")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/5Z8EDau8uNcP1E8JvmfkZe")} />
        <Firefly onClick={()=>this.clickBug("https://open.spotify.com/embed/track/4rpNjW4HXxh8o5UwS7UoWL")} />
        <MusicPlayer player={this.state.bugSong}/>

      </div>
    );
  }
}


export default App;
