import { useState } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import MyContainer from './components/MyContainer'

function App() {
  return (
    <div>
      <About />
      <Header />
      <MyContainer />
    </div>
  )
}

export default App
