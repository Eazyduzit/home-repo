import React from 'react'

interface CustomerProps {
  name: string
  age: number
  title: string
}

const Customer: React.FC<CustomerProps> = ({ name, age, title }) => {
  return (
    <>
      <h2>Customer Component</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Age: {age}</li>
        <li className="list-group-item">Title: {title}</li>
      </ul>
    </>
  )
}
export default Customer
