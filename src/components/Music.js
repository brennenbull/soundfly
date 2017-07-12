import React from 'react'
import Image from './images/grass2.png'
class MusicPlayer extends React.Component {

  render(){
    return(
      <div>
        <footer className="page-footer">
        <img src={Image}></img>
          <iframe src={this.props.player} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
          <h3 className="white-text">Catch a bug for some music!</h3>
        </footer>
      </div>
    );
  }
}

export default MusicPlayer
