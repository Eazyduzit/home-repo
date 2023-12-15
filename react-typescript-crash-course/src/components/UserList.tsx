import React, { useState } from 'react'
import { UserListUser } from '../models/UserListUser'

interface UserListProps {}
interface UserListState {
  users: UserListUser[]
}

const UserList: React.FC<UserListProps> = () => {
  const [state, setState] = useState<UserListState>({
    users: [
      {
        snum: 'AAA101',
        name: 'Elon',
        age: 45,
        designation: 'CEO',
        company: 'SpaceX',
      },
      {
        snum: 'AAA102',
        name: 'John',
        age: 42,
        designation: 'Sr. Software Engineer',
        company: 'SpaceX',
      },
      {
        snum: 'AAA103',
        name: 'Marius',
        age: 39,
        designation: 'Software Engineer',
        company: 'SpaceX',
      },
    ],
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
            <table className="table table-striped text-center table-hover">
              <thead className="bg-dark text-white">
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
                        <td>{user.age}</td>
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
