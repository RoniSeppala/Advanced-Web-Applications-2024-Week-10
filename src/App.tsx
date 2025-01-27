import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import MyContainer from './components/MyContainer'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header name="My Header" />
          <Routes>
            <Route path="/" element={<MyContainer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
