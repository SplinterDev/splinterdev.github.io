import React from 'react'
import './Logbook.scss'
import entries from '../../assets/logbook/entries.json'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Entry from './Entry'

function Logbook(): React.ReactElement {
  const { path, url } = useRouteMatch()

  console.log(entries, path, url)

  return (
    <div className="Logbook">
      <Switch>
        <Route path={`${path}/:entryDate`}>
          <Entry />
        </Route>
      </Switch>
      <aside>
        <ul>
          {entries.map((entry, i) => (
            <li key={i}>
              <Link to={`${url}/${entry}`}>{entry}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Logbook
