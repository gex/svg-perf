import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>SVG Perf</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rect-elements">Rect-elements</Link>
          </li>
          <li>
            <Link to="/mask-elements">Mask elements</Link>
          </li>
          <li>
            <Link to="/symbol-mask-elements">Symbol and mask elements</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
