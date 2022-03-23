import './index.css'
import {Component} from 'react'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="totalBG">
        <h1>Digital Timer</h1>
        <div className="timerContainer">
          <div className="timeContainer">
            <h1 className="timer">25:00</h1>
            <p className="timertext">Timer</p>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
