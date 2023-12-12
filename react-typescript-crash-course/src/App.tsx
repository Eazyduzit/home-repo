import './App.css'
import Customer from './components/Customer'

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

        <div className="row">
          <div className="col">
            <Customer name={'Marius'} age={39} title={'Software Engineer'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
