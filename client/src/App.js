import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from 'react-loaders'
import './App.scss'
import Sidebar from './components/Sidebar'
import Layout from './components/Layout'

const Home = React.lazy(() => import('./components/Home'))
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))

const Portfolio = React.lazy(() => import('./components/Portfolio'))

function App() {
  return (
    <>
      <Sidebar />
      <Layout>
        <Suspense
          fallback={
            <div className="center">
              <Loader type="pacman" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
