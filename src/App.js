import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.scss';

import Developer from './components/Developer/Developer';
import Drummer from './components/Drummer/Drummer';
import Sidenav from './components/Sidenav/Sidenav';
import Writer from './components/Writer/Writer';

import textOptions from './assets/textoptions.json';

import getRandomSample from './helpers/random';

export default function App() {
  const links = [
    <Link key="dev" to="/developer">web developer</Link>,
    <Link key="wri" to="/writer">writer</Link>,
    <Link key="dru" to="/drummer">drummer</Link>
  ];
  const linksCombinations = (links.length * links.length);

  const getTotalCombinations = () => {
    const counts = [];

    for (const typeOfSentence in textOptions) {
      if (Object.hasOwnProperty.call(textOptions, typeOfSentence)) {
        const sentenceOptions = textOptions[typeOfSentence];

        counts.push(sentenceOptions.length);
      }
    }

    const total = counts.reduce((accumulator, currentValue) => accumulator * currentValue) * linksCombinations;

    return new Intl.NumberFormat('en-US').format(total);
  }

  const getUniqueStyle = () => ({
    backgroundColor: getRandomSample(textOptions.background),
    color: getRandomSample(textOptions.color),
    fontWeight: 'bold'
  });

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
                <article>
                  <p>{getRandomSample(textOptions.greetings)} {getRandomSample(textOptions.greetingsFollowUp)}</p>
                  <p>{getRandomSample(textOptions.opening)}, my name is Fabricio Julian C. Montenegro, and this is my website.</p>
                  <p>I'm a {getRandomSample(links, true)}, a {getRandomSample(links, true)}, and a {getRandomSample(links, true)}.</p>
                  <p>You can get in touch by sending an email to <a href="mailto:fabriciojcmontenegro@gmail.com">fabriciojcmontenegro@gmail.com</a> or following one of the specific links on the other pages.</p>

                  <h2>A <span style={getUniqueStyle()}>unique</span> experience</h2>

                  <p>When you {getRandomSample(textOptions.visit)} this {getRandomSample(textOptions.page)}, you have a <span style={getUniqueStyle()}>unique</span> experience! {getRandomSample(textOptions.dontBelieve)} Refresh the page. {getRandomSample(textOptions.refresh)}</p>

                  <p>{getRandomSample(textOptions.colorsAndWords)} are randomly selected every time you visit or refresh the page. {getRandomSample(textOptions.everyTime)}, they are {getRandomSample(textOptions.selected)} independently to form different combinations. Currently, there are {getTotalCombinations()} possible combinations, which means this exact version of this page exists, on average, only once every {getTotalCombinations()} visits.</p>

                  <p>To get a clearer picture of this, here, take a random emoji:</p>
                  <p><span style={{fontSize: '24px'}}>{getRandomSample(textOptions.emoji)}</span></p>
                  <p>Was it the {getRandomSample(textOptions.emojiName)} No? Well...</p>

                  <p>{getRandomSample(textOptions.youGetIt)}. I, myself, probably haven't seen {getRandomSample(textOptions.thisVersion)}, and it's safe to say no one has either. This version of the website is{getRandomSample(textOptions.purposes)} <span style={getUniqueStyle()}>unique</span>.</p>

                  <p>The version of the website you're seeing is yours, and yours only. Enjoy it. And then, refresh the page (as I'm sure you've already done {getRandomSample(textOptions.alreadyDone)}). But remember: this version of the website will be gone forever. This is a <span style={getUniqueStyle()}>unique</span> experience! Isn't it awesome?</p>

                  <p>But you know what's even more awesome? The fact that your experience visiting this website is unique regardless of what I do here. You are a unique person, with a unique combination of genetic attributes and past experiences that allows you -- and only you -- to feel what you are feeling now.</p>

                  <p>You are the only person in the entire history of the universe to live this exact moment. Even if another person gets the same version of this website, they will be informed by different past experiences and a different set of genetic traits. They are in a different place, in a different time. Even if they are right next to you, they are seeing the page from a slightly different angle, from a different set of eyes. The colors you see are not the colors they see.</p>

                  <p>Even if you refresh the page and get the same version, it would be a new experience to you. It would be the first time you are seeing that same version of the page for the second time. Even if this page were to never change again, even it were a static page, your experience would be unique.</p>

                  <p>All of your experiences are unique, always, because they're only yours and because you can't ever live them again. You only get to live things once, and no one else can live them for you.</p>

                  <p>So enjoy. Laugh, cry, run, swim, sing, dance, work, play, love, mourn, get angry, afraid, nervous, relieved, happy, sad, curious, enlightened, hungry, thirsty, satisfied, delighted. Enjoy your unique experiences in this crazy universe of infinite possibilities. No one else can do it for you.</p>









                </article>
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
