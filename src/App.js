import React from 'react';
import './styles/App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"
import * as Brands from '@fortawesome/free-brands-svg-icons';

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1 className="neon-shadow">Fabricio JC Montenegro</h1>
      </header>
      <main>
        <p className="shadow">Hello!</p>
        <p className="shadow">You have reached <em>Fabricio JC Montenegro</em>, web developer and all-around cool guy. I can't talk to you right now because this is a just static web page and not really me, I'm somewhere else. Such a bummer, I know. But fret not! You can get in touch with me by clicking any of the links after the beep.</p>
        <p className="lines-on-sides shadow">
          <span>BEEP</span>
        </p>

      </main>
      <footer>
        <a href="mailto:fabriciojsmontenegro@gmail.com">
          <FontAwesomeIcon icon={Icons.faEnvelope} />
        </a>
        <a href="//github.com/SplinterDev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={Brands.faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/fabricio-jc-montenegro/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={Brands.faLinkedin} />
        </a>
        <div className="copy">Copyright © 2020 Fabricio Julian Carini Montenegro</div>
      </footer>
    </div>
  )
}
