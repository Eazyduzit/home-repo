import React, { useState } from 'react'
import { UserListUser } from '../models/UserListUser'
import { UserService } from '../services/UserService'

interface UserListProps {}
interface UserListState {
  users: UserListUser[]
}

const UserList: React.FC<UserListProps> = () => {
  const [state, setState] = useState<UserListState>({
    users: UserService.getAllUsers(),
  })
  return (
    <>
      <h3>UserList Component</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">User List</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped text-center table-hover shadow-lg">
              <thead className="table-dark">
                <tr>
                  <th>S.Number</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Designation</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {state.users.length > 0 &&
                  state.users.map((user) => {
                    return (
                      <tr key={user.snum}>
                        <td>{user.snum}</td>
                        <td>{user.name}</td>
                        <td>{user.age} years</td>
                        <td>{user.designation}</td>
                        <td>{user.company}</td>
                      </tr>
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
export default UserList
