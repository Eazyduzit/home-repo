import React, { FormEvent, useState } from 'react'
import { InterfaceUser } from '../models/InterfaceUser'

interface LoginFormProps {}
interface LoginFormState {
  user: InterfaceUser
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [state, setState] = useState<LoginFormState>({
    user: {
      username: '',
      password: '',
    },
  })

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    })
  }

  const login = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log(state.user)
  }
  return (
    <>
      <h3>Login Form Component</h3>
      <pre>{JSON.stringify(state.user)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center bg-primary text-white">
                <p className="h4">Login Here</p>
              </div>
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="username"
                      value={state.user.username}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="Username / Email"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      required={true}
                      name="password"
                      value={state.user.password}
                      onChange={updateInput}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-2">
                    <input type="submit" className="btn btn-primary" value="Login" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginForm
