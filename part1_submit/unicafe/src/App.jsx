import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.set}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.percent}</td>
    </tr>
  )
}


const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good + neutral + bad 

  return(
    <table>
      <tbody>
      <StatisticsLine text='good' value={good} />
      <StatisticsLine text='neutral' value={neutral} />
      <StatisticsLine text='bad' value={bad} />
      <StatisticsLine text='all' value={total} />
      <StatisticsLine text='average' value={(good + (bad * -1)) / (total)} />
      <StatisticsLine text='positive' value={(good / (total)) * 100} percent='%' />
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' set={()=> setGood(good + 1)} />
      <Button text='neutral' set={()=> setNeutral(neutral + 1)} />
      <Button text='bad' set={()=> setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics total={good + neutral + bad} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
