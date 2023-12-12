import React from 'react'

interface CustomerProps {
  name: string
  age: number
  title: string
}

const Customer: React.FC<CustomerProps> = ({ name, age, title }) => {
  console.log(name, age, title)
  return <h2>Customer Component</h2>
}
export default Customer
