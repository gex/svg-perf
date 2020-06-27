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
            <Link to="/basic-layout">Basic layout</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
