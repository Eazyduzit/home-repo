import React, { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CounterProps {}
interface CounterState {
  counter: number
}

const Counter: React.FC<CounterProps> = () => {
  const [state, setState] = useState<CounterState>({ counter: 0 })
  const increment = (): void => {
    setState({
      counter: state.counter + 1,
    })
  }
  const decrement = (): void => {
    setState({
      counter: state.counter - 1,
    })
  }
  const reset = (): void => {
    setState({
      counter: (state.counter = 0),
    })
  }
  return (
    <>
      <h3>Counter Component</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <p className="h3">Counter: {state.counter}</p>
                <button onClick={increment} className="btn btn-success m-1">
                  Increment
                </button>
                <button onClick={decrement} className="btn btn-warning m-1">
                  Decrease
                </button>
                <button onClick={reset} className="btn btn-danger m-1">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
