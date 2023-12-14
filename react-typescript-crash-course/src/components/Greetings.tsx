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
  return (
    <>
      <h3>Greetings Component</h3>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <p className="h3">{state.message}</p>
                <button className="btn btn-success m-1">Good Morning</button>
                <button className="btn btn-warning m-1">Good Afternoon</button>
                <button className="btn btn-danger m-1">Good Evening</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Greetings
