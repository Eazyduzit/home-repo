import './App.css'
import Avatar from './Avatar'
import Links from './Links'
import { ProfileCard } from './ProfileCard'

function App() {
  return (
    <div className="App">
      <Avatar />
      <h1>Hei, mitt navn er Marius!</h1>
      <h2>Jeg er en React og Typescript utvikler, i frontend..</h2>
      <Links />
      <ProfileCard variant="success">Success</ProfileCard>
    </div>
  )
}

export default App
