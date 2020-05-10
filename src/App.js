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
        <p className="shadow">You have reached <em>Fabricio JC Montenegro</em>, web developer and all-around cool guy. I can't talk to you right now because this is just a static web page and not really me. Such a bummer, I know. But fret not! You can get in touch with me by clicking any of the links after the beep.</p>
        <p className="lines-on-sides shadow">
          <span>BEEP</span>
        </p>

      </main>
      <footer>
        <a
          href="mailto:fabriciojcmontenegro@gmail.com"
          title="Fabricio's email">
          <FontAwesomeIcon icon={Icons.faEnvelope} aria-hidden="true"/>
        </a>
        <a
          href="//github.com/SplinterDev"
          target="_blank"
          rel="noopener noreferrer"
          title="Fabricio's GitHub profile">
          <FontAwesomeIcon icon={Brands.faGithub} aria-hidden="true"/>
        </a>
        <a
          href="https://www.linkedin.com/in/fabricio-jc-montenegro/"
          target="_blank"
          rel="noopener noreferrer"
          title="Fabricio's LinkedIn profile">
          <FontAwesomeIcon icon={Brands.faLinkedin} aria-hidden="true"/>
        </a>
        <div className="copy">Copyright © 2020 Fabricio Julian Carini Montenegro</div>
      </footer>
    </div>
  )
}
