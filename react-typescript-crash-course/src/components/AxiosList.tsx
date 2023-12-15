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

  return (
    <>
      <h3>Axios List Component</h3>
    </>
  )
}
export default AxiosList
