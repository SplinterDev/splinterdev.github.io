import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Sidenav from './components/Sidenav/Sidenav';

const Developer = lazy(() => import('./components/Developer/Developer'));
const Drummer = lazy(() => import('./components/Drummer/Drummer'));
const Writer = lazy(() => import('./components/Writer/Writer'));
const Home = lazy(() => import('./components/Home/Home'));

const renderLoader = () => <p>Loading</p>;

export default function App() {
  return (
    <div className="App">
      <Router>
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
        <footer>
          Copyright &copy; 2021 Fabricio Julian C. Montenegro
        </footer>
      </Router>
    </div>
  )
}
