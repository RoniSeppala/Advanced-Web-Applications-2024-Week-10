import { useState } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import MyContainer from './components/MyContainer'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <About />
        <Header />
        <MyContainer />
      </p>
    </>
  )
}

export default App
