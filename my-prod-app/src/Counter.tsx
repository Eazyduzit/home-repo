import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button className="inc" onClick={handleIncrement}>
        Increase
      </button>
      <button className="dec" onClick={handleDecrement}>
        Decrease
      </button>
      <button className="res" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
export default Counter
