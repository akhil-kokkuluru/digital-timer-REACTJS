import {useState} from 'react'

const Counter = () => {
  const [x, setx] = useState(0)
  const onclickingButton = () => {
    setx(x + 1)
  }
  return (
    <>
      <h1>Counter: {x}</h1>
      <button onClick={onclickingButton}>Increment</button>
    </>
  )
}

export default Counter
