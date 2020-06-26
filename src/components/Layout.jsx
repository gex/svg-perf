import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>SVG Perf</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
