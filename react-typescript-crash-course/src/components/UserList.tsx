import React from 'react'
import { UserListUser } from '../models/UserListUser'

interface UserListProps {}
interface UserListState {
  users: UserListUser[]
}

const UserList: React.FC<UserListProps> = () => {
  return (
    <>
      <h3>UserList Component</h3>
    </>
  )
}
export default UserList
