import React from 'react'

// interface CustomerState {}
interface CustomerProps {
  name: string
  age: number
  title: string
}

export class CustomerClass extends React.Component<CustomerProps> {
  constructor(props: CustomerProps) {
    super(props)
  }

  render() {
    const { name, age, title } = this.props
    return (
      <>
        <h3>Customer Class Component</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
      </>
    )
  }
}
