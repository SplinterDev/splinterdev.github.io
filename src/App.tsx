import React, { lazy, Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.scss'

import Sidenav from './components/Sidenav/Sidenav'

const Logbook = lazy(() => import('./components/Logbook/Logbook'))
const Developer = lazy(() => import('./components/Developer/Developer'))
const Drummer = lazy(() => import('./components/Drummer/Drummer'))
const Writer = lazy(() => import('./components/Writer/Writer'))
const Home = lazy(() => import('./components/Home/Home'))

const renderLoader = () => <p>Loading</p>

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <HashRouter>
        <header>
          <a href="/">
            <h1>Fabricio Julian C. Montenegro</h1>
          </a>
        </header>
        <div className="content">
          <aside>
            <Sidenav />
          </aside>
          <main>
            <Switch>
              <Route path="/" exact>
                <Suspense fallback={renderLoader()}>
                  <Home />
                </Suspense>
              </Route>
              <Route path="/logbook">
                <Suspense fallback={renderLoader()}>
                  <Logbook />
                </Suspense>
              </Route>
              <Route path="/developer">
                <Suspense fallback={renderLoader()}>
                  <Developer />
                </Suspense>
              </Route>
              <Route path="/writer">
                <Suspense fallback={renderLoader()}>
                  <Writer />
                </Suspense>
              </Route>
              <Route path="/drummer">
                <Suspense fallback={renderLoader()}>
                  <Drummer />
                </Suspense>
              </Route>
            </Switch>
          </main>
        </div>
        <footer>Copyright &copy; 2021 Fabricio Julian C. Montenegro</footer>
      </HashRouter>
    </div>
  )
}
