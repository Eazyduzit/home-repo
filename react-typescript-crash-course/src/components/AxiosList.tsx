import React, { useEffect, useState } from 'react'
import { AxiosListUser } from '../models/AxiosListUser'
import { AxiosListService } from '../services/AxiosListService'

interface AxiosListProps {}
interface AxiosListState {
  loading: boolean
  users: AxiosListUser[]
  errorMsg: string
}

const AxiosList: React.FC<AxiosListProps> = () => {
  const [state, setState] = useState<AxiosListState>({
    loading: false,
    users: [] as AxiosListUser[],
    errorMsg: '',
  })

  useEffect(() => {
    setState({ ...state, loading: true })
    AxiosListService.getAllUsers()
      .then((response) => {
        console.log(response.data)
        setState({
          ...state,
          loading: false,
          users: response.data,
        })
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          errorMsg: error.message,
        })
      })
  }, [])

  const { loading, users, errorMsg } = state

  return (
    <>
      <h3>Axios List Component</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover text-center table-striped">
              <thead className="table-primary">
                <tr>
                  <th>S.Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <>
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.company.name}</td>
                          <td>{user.website}</td>
                        </tr>
                      </>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default AxiosList
