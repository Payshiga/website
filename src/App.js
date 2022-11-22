import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Privacy from './components/Privacy/Privacy'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Layout from './Layout'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <ScrollToTop/>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/privacy-policy" exact element={<Privacy/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App