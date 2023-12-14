import './App.css'
import Counter from './components/Counter'
import Customer from './components/Customer'
import { CustomerClass } from './components/CustomerClass'
import Employee from './components/Employee'
import { EmployeeClass } from './components/EmployeeClass'

function App() {
  return (
    <div className="container mt-3">
      <div className="grid">
        <div className="row">
          <div className="col">
            <p className="h3 fw-bold text-success">Hola, Mundo!</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum laudantium
              beatae eius ipsum nam placeat, laboriosam ut velit nobis quo! Magni quaerat ex neque
              sed unde rem sint! Provident.
            </p>
            <button className="btn btn-success btn-sm">
              <i className="fa fa-book" /> Read More
            </button>
          </div>
        </div>

        <Counter />

        <div className="row">
          <div className="col">
            <Customer name={'Marius'} age={39} title={'Software Engineer'} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CustomerClass name={'Marius'} age={39} title={'Software Engineer'} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Employee />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <EmployeeClass />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
