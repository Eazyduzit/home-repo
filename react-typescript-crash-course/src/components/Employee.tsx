import React, { useState } from 'react'

interface EmployeeProps {}
interface EmployeeState {
  name: string
  age: number
  title: string
}

const Employee: React.FC<EmployeeProps> = () => {
  const [state, setState] = useState<EmployeeState>({
    name: 'Marius',
    age: 39,
    title: 'Software Engineer',
  })
  return (
    <>
      <h3>Employee Component</h3>
      <ul className="list-group">
        <li className="list-group-item">Name: {state.name}</li>
        <li className="list-group-item">Age: {state.age}</li>
        <li className="list-group-item">Title: {state.title}</li>
      </ul>
    </>
  )
}

export default Employee
