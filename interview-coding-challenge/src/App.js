import './App.css'
import CountdownTimer from './CountdownTimer'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown Timer Challenge</h1>
        <p>Build a countdown timer component below</p>
      </header>
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <CountdownTimer />
      </main>
    </div>
  )
}

export default App
