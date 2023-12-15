import React, { useState } from 'react'
import { AxiosListUser } from '../models/AxiosListUser'

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
  return (
    <>
      <h3>Axios List Component</h3>
    </>
  )
}
export default AxiosList
