import './index.css'
import {Component} from 'react'

const initialState = {runningStatus: false, timerMinutes: 25, timerSeconds: 0}

class DigitalTimer extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => clearInterval(this.intervalId)

  onTimerDecrease = () => {
    const {timerMinutes} = this.state
    if (timerMinutes > 1) {
      this.setState(prevValue => ({timerMinutes: prevValue.timerMinutes - 1}))
    }
  }

  onTimerIncrease = () => {
    this.setState(prevValue => ({timerMinutes: prevValue.timerMinutes + 1}))
  }

  onclickReset = () => {
    this.clearTimeInterval()
    this.setState(initialState)
  }

  timeIncrement = () => {
    const {timerMinutes, timerSeconds} = this.state
    const isTimerCompleted = timerSeconds === timerMinutes * 60

    if (isTimerCompleted) {
      this.clearTimeInterval()
      this.setState({runningStatus: false})
    } else {
      this.setState(prevValue => ({
        timerSeconds: prevValue.timerSeconds + 1,
      }))
    }
  }

  onclickingStartPauseButton = () => {
    const {timerMinutes, timerSeconds, runningStatus} = this.state
    const isTimerCompleted = timerSeconds === timerMinutes * 60
    if (isTimerCompleted) {
      this.setState({timerSeconds: 0})
    }
    if (runningStatus) {
      this.clearTimeInterval()
    } else {
      this.intervalId = setInterval(this.timeIncrement, 1000)
    }
    this.setState(preVstate => ({runningStatus: !preVstate.runningStatus}))
  }

  renderTimerController = () => {
    const {runningStatus} = this.state
    const startPauseimg = runningStatus
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const buttonAltText = runningStatus ? 'pause icon' : 'play icon'
    const textStatus = runningStatus ? 'Pause' : 'Start'

    return (
      <div className="playPausecss">
        <button
          className="buttonCss"
          type="button"
          onClick={this.onclickingStartPauseButton}
        >
          <img className="playcss" alt={buttonAltText} src={startPauseimg} />
          <p className="buttonText">{textStatus}</p>
        </button>
        <button className="buttonCss" type="button" onClick={this.onclickReset}>
          <img
            className="playcss"
            alt="reset icon"
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
          />
          <p className="buttonText">Reset</p>
        </button>
      </div>
    )
  }

  timerRunningText = () => {
    const {timerMinutes, timerSeconds} = this.state
    const totalRemSeconds = timerMinutes * 60 - timerSeconds
    const minutes = Math.floor(totalRemSeconds / 60)
    const seconds = Math.floor(totalRemSeconds % 60)
    const stringMins = minutes > 9 ? minutes : `0${minutes}`
    const stringSecs = seconds > 9 ? seconds : `0${seconds}`
    return {stringMins, stringSecs}
  }

  render() {
    const {stringMins, stringSecs} = this.timerRunningText()
    const {timerMinutes, runningStatus} = this.state
    const textTimer = runningStatus ? 'Running' : 'Paused'
    return (
      <div className="totalBG">
        <h1>Digital Timer</h1>
        <div className="timerControllerContainer">
          <div className="timerContainer">
            <div className="timeContainer">
              <h1 className="timer">{`${stringMins}:${stringSecs}`}</h1>
              <p className="timertext">{textTimer}</p>
            </div>
          </div>
          <div className="controllersContainer">
            {this.renderTimerController()}
            <p className="timerPhrase">Set Timer limit</p>
            <div className="timeAdjustContainer">
              <button
                className="plusMinusButton"
                type="button"
                onClick={this.onTimerIncrease}
                disabled={runningStatus}
              >
                +
              </button>

              <p className="timerValue">{timerMinutes}</p>
              <button
                className="plusMinusButton"
                type="button"
                onClick={this.onTimerDecrease}
                disabled={runningStatus}
              >
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
