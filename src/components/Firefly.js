import React, {Component} from 'react'

class Firefly extends Component {
  constructor(){
    super();
    this.state = {
      animationName: ''
    };
  }

  componentWillMount() {
    let styleSheet = document.styleSheets[0];

    let animationName = `animation${Math.round(Math.random() * 100)}`;

    let keyframes =
    `@-webkit-keyframes ${animationName} {
        0%,100% {-webkit-transform:translate(${Math.random() * 1300}px, ${Math.random() * 300}px)}
        33% {-webkit-transform:translate(${Math.random() * 1300}px, ${Math.random() * 300}px)}
        66% {-webkit-transform:translate(${Math.random() * 1300}px, ${Math.random() * 300}px)}
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    this.setState({
      animationName: animationName
    });
  }


  render() {
    const style = {
      transform: `translate(${Math.random() * 1200}px, ${Math.random() * 600}px)`,
      animationName: this.state.animationName,
      animationTimingFunction: 'linear',
      animationDuration: '20s',
      animationDelay: '0.0s',
      animationIterationCount: 'infinite',
      animationDirection:'alternate',
      animationFillMode: 'forwards'
    };

    return(
      // <button onClick={this.handleClick}>bug</button>
      <div style={style} className = 'fire-fly-container'>
        <div onClick={()=>this.props.onClick()} className ="fire-fly">
          <div className ="pulse">
          </div>
        </div>
      </div>
    )
  }
}

export default Firefly
