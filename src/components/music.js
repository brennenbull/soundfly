import React from 'react'

class MusicPlayer extends React.Component {

  render(){
    return(
      <footer className="page-footer">
      <iframe src={this.props.player} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
        <h3 className="white-text">Click a bug!</h3>
      </footer>
    );
  }
}

export default MusicPlayer
