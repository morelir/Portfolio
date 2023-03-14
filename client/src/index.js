import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div _ngcontent-rmg-c6="" class="effects">
        <div _ngcontent-rmg-c6="" id="stars"></div>
        <div _ngcontent-rmg-c6="" id="stars2"></div>
        <div _ngcontent-rmg-c6="" id="stars3"></div>
      </div>
      <App />
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
