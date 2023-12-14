import React, { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GreetingsProps {}
interface GreetingsState {
  message: string
}

const Greetings: React.FC<GreetingsProps> = () => {
  const [state, setState] = useState<GreetingsState>({
    message: 'Hello',
  })
  const newMsg = () => {
    setState({
      message: 'Good Morning',
    })
  }
  const changeMsg = (greet: string): void => {
    setState({
      message: greet,
    })
  }
  return (
    <>
      <h3>Greetings Component</h3>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <p className="h3">{state.message}</p>
                <button onClick={newMsg} className="btn btn-success m-1">
                  Good Morning
                </button>
                <button onClick={() => changeMsg('Good Afternoon')} className="btn btn-warning m-1">
                  Good Afternoon
                </button>
                <button onClick={() => changeMsg('Good Evening')} className="btn btn-danger m-1">
                  Good Evening
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Greetings
