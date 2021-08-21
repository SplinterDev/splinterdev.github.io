import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidenav.scss'

function Sidenav(): React.ReactElement {
  return (
    <nav className="Sidenav">
      <ul>
        <li>
          <NavLink activeClassName="active-link" to="/developer">
            developer
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/writer">
            writer
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-link" to="/drummer">
            drummer
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
