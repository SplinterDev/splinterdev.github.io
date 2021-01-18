import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.scss';

import Developer from './components/Developer/Developer';
import Drummer from './components/Drummer/Drummer';
import Sidenav from './components/Sidenav/Sidenav';
import Writer from './components/Writer/Writer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1>Fabricio Julian C. Montenegro</h1>
          </Link>
        </header>
        <div className="content">
          <aside>
            <Sidenav />
          </aside>
          <main>
            <Switch>
              <Route path="/" exact>
                <p>Hello there! How are you doing?</p>
                <p>As you might have guessed from the big title, my name is Fabricio Julian C. Montenegro and this is my website.</p>
                <p>I'm a <Link to="/developer">web developer</Link>, a <Link to="/developer">writer</Link>, and a <Link to="/developer">drummer</Link>.</p>
                <p>If you want to get in touch, you can send an email to <a href="mailto:fabriciojcmontenegro@gmail.com">fabriciojcmontenegro@gmail.com</a>, or follow one of the specific link on the other pages.</p>
              </Route>
              <Route path="/developer">
                <Developer />
              </Route>
              <Route path="/writer">
                <Writer />
              </Route>
              <Route path="/drummer">
                <Drummer />
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
