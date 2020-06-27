import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const Layout = ({ children }) => (
  <div className="layout">
    <header>
      <h1>SVG Perf</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rect-elements">Rect elements</Link> /{' '}
            <Link to="/rect-elements-animated">with animation</Link>
          </li>
          <li>
            <Link to="/mask-elements">Mask elements</Link> /{' '}
            <Link to="/mask-elements-animated">with animation</Link>
          </li>
          <li>
            <Link to="/symbol-mask-elements">Symbol and mask elements</Link> /{' '}
            <Link to="/symbol-mask-elements-animated">with animation</Link>
          </li>
          <li>
            <Link to="/symbol-clip-path-elements">
              Symbol and clip path elements
            </Link>{' '}
            /{' '}
            <Link to="/symbol-clip-path-elements-animated">with animation</Link>
          </li>
          <li>
            <Link to="/symbol-path-elements">Symbol and path elements</Link> /{' '}
            <Link to="/symbol-path-elements-animated">with animation</Link>
          </li>
          <li>
            <Link to="/g-path-elements">G and path elements</Link> /{' '}
            <Link to="/g-path-elements-animated">with animation</Link>
          </li>
          <li>
            <Link to="/path-elements">Path elements</Link> /{' '}
            <Link to="/path-elements-animated">with animation</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>
        made by <a href="https://github.com/gex">gex</a> |{' '}
        <a href="https://github.com/gex/svg-perf">github repository</a>
      </p>
    </footer>
  </div>
)

export default Layout
