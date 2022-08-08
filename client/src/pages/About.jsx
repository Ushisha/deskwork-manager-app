import React from 'react'
import TimerDisplay from '../components/TimerDisplay'
export default function AboutPage() {
  return (
    <>
      <TimerDisplay />
      <h1>About this project</h1>
      <h3>What is Pomofocus?</h3>
      <p>
        Pomofocus is a customizable pomodoro timer that works on desktop &
        mobile browser. The aim of this app is to help you focus on any task you
        are working on, such as study, writing, or coding. This app is inspired
        by Pomodoro Technique which is a time management method developed by
        Francesco Cirillo.
      </p>
      <h3>What is Pomodoro Technique?</h3>
      <p>
        The Pomodoro Technique is created by Francesco Cirillo for a more
        productive way to work and study. The technique uses a timer to break
        down work into intervals, traditionally 25 minutes in length, separated
        by short breaks. Each interval is known as a pomodoro, from the Italian
        word for 'tomato', after the tomato-shaped kitchen timer that Cirillo
        used as a university student. - Wikipedia
      </p>

      <h3>How to use the Pomodoro Timer?</h3>
      <ol>
        <li>Add tasks to work on today</li>
        <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>

        <li>Select a task to work on</li>
        <li>Start timer and focus on the task for 25 minutes</li>
        <li>
          Take a break for 5 minutes when the alarm ring Iterate 3-5 until you
          finish the tasks Features
        </li>
        <li>Responsive design that works with desktop and mobile</li>
        <li>
          Color transition to switch moods between work time and rest time
        </li>
        <li>Audio notification at the end of a timer period</li>
        <li>Customizable timer intervals to suit your preference</li>
        <li>organize tasks by project</li>
        <li>visualy be able to see how much you have focused</li>
      </ol>
    </>
  )
}
