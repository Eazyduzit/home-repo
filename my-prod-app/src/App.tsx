import './App.css'
import Avatar from './Avatar'
import Links from './Links'
import { ProfileCard } from './ProfileCard'
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <Avatar />
      <h1>Hei, mitt navn er Marius!</h1>
      <h2>Jeg er en React og Typescript utvikler, i frontend..</h2>
      <Links />
      <div style={{ display: 'flex', gap: 'var(--sds-space-gap-small)' }}>
        <ProfileCard variant="success">Success</ProfileCard>
        <ProfileCard variant="warning">Warning</ProfileCard>
        <ProfileCard variant="critical">Critical</ProfileCard>
      </div>
      <Counter />
    </div>
  )
}

export default App
