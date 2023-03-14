import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from 'react-loaders'
import './App.scss'
import Sidebar from './components/Sidebar'
import Layout from './components/Layout'

const Home = React.lazy(() => import('./components/Home'))
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))
const Projects = React.lazy(() => import('./components/Projects'))

function App() {
  return (
    <>
      <Sidebar />
      <Layout>
        <Suspense
          fallback={
            <div className="center">
              <Loader type="ball-pulse" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
