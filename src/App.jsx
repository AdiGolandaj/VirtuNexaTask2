import React from 'react'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'

const App = () => {
  return (
    <main>
      <div className='sticky top-0 z-10'>
      <Nav/>
      </div>
      <Home/>
      <Shop/>
    </main>
  )
}

export default App