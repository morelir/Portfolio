import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from 'react-loaders'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'

import './App.scss'

const Home = React.lazy(() => import('./components/Home'))
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))
const Layout = React.lazy(() => import('./components/Layout'))
const Portfolio = React.lazy(() => import('./components/Portfolio'))

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="center">
            <Loader type="pacman" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
