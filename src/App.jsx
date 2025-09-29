
import React from 'react'
import Header from './components/Header'
import RoutesApp from './routes'

export default function App() {
  return (
    <div>
      <Header />
      <div className="container mt-6">
        <RoutesApp />
      </div>
    </div>
  )
}



