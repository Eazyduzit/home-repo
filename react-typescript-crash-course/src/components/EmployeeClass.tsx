import React from 'react'

interface EmployeeProps {}
interface EmployeeState {}

export class EmployeeClass extends React.Component<EmployeeProps, EmployeeState> {
  constructor(props: EmployeeProps) {
    super(props)
  }

  render() {
    return <h3>Employee Class</h3>
  }
}
