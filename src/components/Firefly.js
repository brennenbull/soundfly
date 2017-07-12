import React, {Component} from 'react'

class Firefly extends Component {
  render() {
    return(
      // <button onClick={this.handleClick}>bug</button>
      <div className = 'fire-fly-container'>
        <div onClick={()=>this.props.onClick()} className ="fire-fly">
          <div className ="pulse">
          </div>
        </div>
      </div>
    )
  }
}

export default Firefly
