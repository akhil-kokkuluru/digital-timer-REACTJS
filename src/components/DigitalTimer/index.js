import './index.css'
import {Component} from 'react'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="totalBG">
        <h1>Digital Timer</h1>
        <div className="timerControllerContainer">
          <div className="timerContainer">
            <div className="timeContainer">
              <h1 className="timer">25:00</h1>
              <p className="timertext">Timer</p>
            </div>
          </div>
          <div className="controllersContainer">
            <div className="playPausecss">
              <button className="buttonCss" type="button">
                <img
                  className="playcss"
                  alt="play icon"
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                />
                <p className="buttonText">Start</p>
              </button>
              <button className="buttonCss" type="button">
                <img
                  className="playcss"
                  alt="play icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                <p className="buttonText">Reset</p>
              </button>
            </div>
            <p className="timerPhrase">Set Timer limit</p>
            <div className="timeAdjustContainer">
              <button className="plusMinusButton" type="button">
                +
              </button>

              <p className="timerValue">25</p>
              <button className="plusMinusButton" type="button">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
