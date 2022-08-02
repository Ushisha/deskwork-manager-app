//Main
import { useState, useEffect } from 'react'

import PomoConfig from './PomoConfig'
// Importing the useSound Hooks
import useSound from 'use-sound'
//Importing the sounds
import startTimer from '../sounds/startTimer.mp3'
import bowl from '../sounds/bowl.mp3'
import timesUp from '../sounds/timesUp.mp3'
import { GrRefresh } from 'react-icons/gr'
//Importing the circular svg
// import { CircularProgressbarWithChildren } from "react-circular-progressbar";

export default function PomoTimer(props) {
  const { updateConfigure, pomodoro, pomoBreak, updatePomodoro } = props
  const [isPlay, setIsPlay] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [_interval, _setInterval] = useState(0)
  const [_remainingTimeinMs, _setRemainingTimeinMs] = useState(0)
  /**
   * All about the sounds
   */
  const [_startTimer] = useSound(startTimer)
  const [_pauseTimer] = useSound(bowl)
  const [_timesUp] = useSound(timesUp)
  const configureTime = (_session, _break) => {
    if (!isBreak) {
      _session < 10 ? setMinutes(`0${_session}`) : setMinutes(pomodoro)
      setSeconds('00')
    } else {
      _break < 10 ? setMinutes(`0${_break}`) : setMinutes(_break)
      setSeconds('00')
    }
  }
  /**
   * Countdown function to count the time.
   */
  const countDownFunction = (_endTime) => {
    let remainingTimeinMs = _endTime - Date.now()
    _setRemainingTimeinMs(remainingTimeinMs)
    let remainingTimeinS = Math.round(remainingTimeinMs / 1000)
    //Preparing for the two digits minutes & seconds
    let _tempMinute = Math.floor(remainingTimeinS / 60)
    let _tempSeconds = Math.floor(remainingTimeinS % 60)
    _tempMinute < 10 ? setMinutes(`0${_tempMinute}`) : setMinutes(_tempMinute)
    _tempSeconds < 10
      ? setSeconds(`0${_tempSeconds}`)
      : setSeconds(_tempSeconds)
  }
  // Changing the play/pause btn
  const changePlayBtn = () => {
    if (minutes === '00' && seconds === '00') return
    setIsPlay(!isPlay)
    if (!isPlay) {
      _startTimer()
      let totalTimeinMs = _remainingTimeinMs
      let _endTime = totalTimeinMs + Date.now()
      _setInterval(
        setInterval(() => {
          countDownFunction(_endTime)
        }, 100)
      )
    } else {
      _pauseTimer()
      clearInterval(_interval)
    }
  }
  //Timer Restart functionality
  const restartFunction = () => {
    configureTime(pomodoro, pomoBreak)
    clearInterval(_interval)
    setIsPlay(false)
    setIsBreak(false)
    _setRemainingTimeinMs(pomodoro * 60000)
  }
  // const changeConfigure = () => {
  //   restartFunction()
  //   updateConfigure(true)
  // }
  // ChangingConfigure
  useEffect(() => {
    configureTime(pomodoro, pomoBreak)
    if (!isBreak) {
      _setRemainingTimeinMs(pomodoro * 60000)
    } else {
      _setRemainingTimeinMs(pomoBreak * 60000)
    }
  }, [pomodoro, pomoBreak, isBreak])
  //useEffect
  useEffect(() => {
    if (
      minutes === '00' &&
      seconds === '00' &&
      _remainingTimeinMs < 1000 &&
      _remainingTimeinMs !== 0
    ) {
      _timesUp()
      clearInterval(_interval)
      setIsPlay(false)
      setIsBreak(!isBreak)
    }
  }, [minutes, seconds])

  return (
    <>
      <div className="">
        {/* main timer section */}
        <div className="main__section--title mx-auto">
          <div className="timer">
            <svg
              className="timer--svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              height="350"
              width="350"
            >
              <g className="timer--circle">
                <circle
                  className="timer--path-elapsed"
                  cx="50"
                  cy="50"
                  r="45"
                />
              </g>
            </svg>
          </div>
          <div className="timer--label text-center">
            <h1 className="time">
              {minutes} : {seconds}
            </h1>
            <p className="lead">{isBreak ? '#BREAK' : '#SESSION'}</p>
          </div>
        </div>
        {/* btns section */}
        <div className="btn__section d-flex align-items-center justify-content-center mb-3">
          {/* play & pause btns */}
          <div className="btn-play-pause mx-2" onClick={changePlayBtn}>
            {isPlay ? (
              <div className="pause-icon">
                <svg
                  fill="#FC636B"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="25px"
                  height="25px"
                  className="pause-icon"
                >
                  <path d="M 5 2 L 5 14 L 6 14 L 6 2 Z M 10 2 L 10 14 L 11 14 L 11 2 Z" />
                </svg>
              </div>
            ) : (
              <div className="play-icon">
                <svg
                  fill="#8773FF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  className="play-icon"
                >
                  <path d="M 4 2 L 4 22 L 21.3125 12 Z" />
                </svg>
              </div>
            )}
          </div>
          {/* configure modal btn */}
          <PomoConfig
            updateConfigure={updateConfigure}
            updatePomodoro={updatePomodoro}
            className="positon-relative"
          />

          {/* refresh btn */}
          <button className="btn btn-refresh ms-1" onClick={restartFunction}>
            <GrRefresh className="refresh-icon" />
          </button>
        </div>
      </div>
    </>
    // <div className="pomo_container text-center">
    //   <div className="timer-display-container mx-auto">
    //     <h1 className="digit display-1">
    //       {minutes} : {seconds}
    //     </h1>
    //   </div>

    //   <div className="m-3 lead">
    //     <p>{isBreak ? '#BREAK' : '#SESSION'}</p>
    //   </div>

    //   <div className="setting-btn-container">
    //     <div onChange={changePlayBtn} className="btn-play-pause">
    //       {isPlay ? (
    //         <div>
    //           <svg
    //             fill="#F06A6A"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 16 16"
    //             width="50px"
    //             height="50px"
    //           >
    //             <path d="M 5 2 L 5 14 L 6 14 L 6 2 Z M 10 2 L 10 14 L 11 14 L 11 2 Z" />
    //           </svg>
    //         </div>
    //       ) : (
    //         <div>
    //           <svg
    //             fill="#F06A6A"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="50px"
    //             height="50px"
    //           >
    //             <path d="M 4 2 L 4 22 L 21.3125 12 Z" />
    //           </svg>
    //         </div>
    //       )}
    //     </div>

    //     <PomoConfig
    //       updateConfigure={updateConfigure}
    //       updatePomodoro={updatePomodoro}
    //       className=""
    //     />
    //     <div className="btn-restart" onClick={restartFunction}>
    //       <svg
    //         fill="#00B890"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 26 26"
    //         width="20px"
    //         height="20px"
    //       >
    //         <path d="M 10 0 L 0 2 L 3.03125 5.03125 C 1.273438 7.222656 0.1875 9.972656 0.1875 13 C 0.1875 20.074219 5.921875 25.8125 13 25.8125 C 20.078125 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 7.695313 22.59375 3.132813 18 1.1875 L 18 4.28125 C 21.027344 6.019531 23.0625 9.261719 23.0625 13 C 23.0625 18.5625 18.5625 23.0625 13 23.0625 C 7.4375 23.0625 2.9375 18.5625 2.9375 13 C 2.9375 10.726563 3.695313 8.652344 4.96875 6.96875 L 8 10 Z" />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
  )
}
