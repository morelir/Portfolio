import { Outlet } from 'react-router-dom'
import './index.scss'

const Layout = (props) => {
  return (
    <div className="App">
      <div className="page">
   
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;html&gt;</span>
          <br />
          &lt;body&gt;
          
        </span>

        {/* <Outlet /> */}
        {props.children}
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
