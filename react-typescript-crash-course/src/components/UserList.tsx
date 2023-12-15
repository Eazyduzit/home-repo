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
    </>
  )
}
export default UserList
