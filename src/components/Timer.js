import React, { useEffect, useState } from "react"

const Timer = () => {
  const [daysLeft, setDaysLeft] = useState(0)
  const [hoursLeft, setHoursLeft] = useState(0)
  const [minutesLeft, setMinutesLeft] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let countDownDate = new Date("Nov 19, 2021 00:00:00").getTime()
      let now = new Date().getTime()
      let timeleft = countDownDate - now

      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000)

      setDaysLeft(days)
      setHoursLeft(hours)
      setMinutesLeft(minutes)
      setSecondsLeft(seconds)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section>
      <h2>Countdown until Endwalker's release: </h2>
      <div className="timer-container">
        <div className="days">
          <h3>Days</h3>
          <div className="box">
            <h4>{daysLeft}</h4>
          </div>
        </div>
        <div className="hours">
          <h3>Hours</h3>
          <div className="box">
            <h4>{hoursLeft}</h4>
          </div>
        </div>
        <div className="minutes">
          <h3>Minutes</h3>
          <div className="box">
            <h4>{minutesLeft}</h4>
          </div>
        </div>
        <div className="seconds">
          <h3>Seconds</h3>
          <div className="box">
            <h4>{secondsLeft}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timer
