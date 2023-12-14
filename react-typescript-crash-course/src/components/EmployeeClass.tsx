import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface EmployeeProps {}
interface EmployeeState {
  name: string
  age: number
  title: string
}

export class EmployeeClass extends React.Component<EmployeeProps, EmployeeState> {
  constructor(props: EmployeeProps) {
    super(props)
    this.state = {
      name: 'Marius',
      age: 39,
      title: 'Software Engineer',
    } as EmployeeState
  }

  render() {
    const { name, age, title } = this.state
    return (
      <>
        <h3>Employee Class Component</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
      </>
    )
  }
}
