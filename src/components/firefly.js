import React, {Component} from 'react'

class Firefly extends Component {
  constructor() {
    super()
  }



  render() {
    return(
      // <button onClick={this.handleClick}>bug</button>
      <div className = 'fire-fly-container'>
        <div className ="fire-fly">
          <div className ="pulse">
          </div>
        </div>
      </div>
    )
  }
}

export default Firefly
