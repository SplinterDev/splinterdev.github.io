import React from 'react'
import { Link } from 'react-router-dom'
import textOptionsJSON from '../../assets/textoptions.json'
import getRandomSample from '../../helpers/random'
import { Options, OptionsKeys } from '../../types/options'
import './Home.scss'

const textOptions = textOptionsJSON as Options

function Home(): React.ReactElement {
  const links = [
    <Link key="dev" to="/developer">
      web developer
    </Link>,
    <Link key="wri" to="/writer">
      writer
    </Link>,
    <Link key="dru" to="/drummer">
      drummer
    </Link>,
  ]
  const linksCombinations = links.length * links.length

  const getTotalCombinations = () => {
    const counts = []

    for (const typeOfSentence in textOptions) {
      if (Object.hasOwnProperty.call(textOptions, typeOfSentence)) {
        const sentenceOptions = textOptions[typeOfSentence as OptionsKeys]

        counts.push(sentenceOptions.length)
      }
    }

    const total =
      counts.reduce((accumulator, currentValue) => accumulator * currentValue) *
      linksCombinations

    return new Intl.NumberFormat('en-US').format(total)
  }
  const possibleCombinations = getTotalCombinations()

  const backgroundColor = getRandomSample(textOptions.colors, true)
  const borderColor = getRandomSample(textOptions.colors, true)
  const emojiStyle = {
    backgroundColor: backgroundColor.value,
    borderColor: borderColor.value,
  }

  const emoji = getRandomSample(textOptions.emoji)
  const guess = getRandomSample(textOptions.emoji)

  /* eslint-disable */
  const guessText =
    guess.name === 'wizard' || emoji.name === 'wizard'
      ? guess.name === emoji.name
        ? ` Wait. I'M RIGHT? The wizard is my favorite emoji! The chance of my guess being right is one in ${
            textOptions.emoji.length * textOptions.emoji.length
          }!!! Take a screenshot of this and send me an email! Wow!`
        : ' Did you know the wizard is my favorite emoji? But the chances of my guess being right are very low. Oh, well...'
      : ' No? Oh, well...'
  /* eslint-disable */

  return (
    <article className="Home">
      <p>
        {`${getRandomSample(textOptions.greetings)} ${getRandomSample(
          textOptions.greetingsFollowUp,
        )}`}
      </p>
      <p>
        {getRandomSample(textOptions.opening)}, my name is Fabricio Julian C.
        Montenegro, and this is my website.
      </p>
      <p>
        I&apos;m a {getRandomSample(links, true)}, a{' '}
        {getRandomSample(links, true)}, and a {getRandomSample(links, true)}.
      </p>
      <p>
        You can get in touch by sending an email to{' '}
        <a href="mailto:fabriciojcmontenegro@gmail.com">
          fabriciojcmontenegro@gmail.com
        </a>{' '}
        or following one of the specific links on the other pages.
      </p>

      <h2>A unique experience</h2>

      <p>
        When you {getRandomSample(textOptions.visit)} this{' '}
        {getRandomSample(textOptions.page)}, you have a unique experience!{' '}
        {getRandomSample(textOptions.dontBelieve)} Refresh the page and read
        this paragraph again.{' '}
        <a href="/">{getRandomSample(textOptions.refresh)}</a>
      </p>

      <p>
        {getRandomSample(textOptions.colorsAndWords)} are randomly selected
        every time you visit or refresh the page.{' '}
        {getRandomSample(textOptions.everyTime)}, they are{' '}
        {getRandomSample(textOptions.selected)} independently to form different
        combinations.
      </p>

      <p>
        To get a clearer picture of this, here, take a random emoji with{' '}
        {getRandomSample(textOptions.colorAdjective, true)}{' '}
        {backgroundColor.name} background and{' '}
        {getRandomSample(textOptions.colorAdjective, true)} {borderColor.name}{' '}
        border:
      </p>

      <div className="emoji-row">
        <figure className="emoji" style={emojiStyle}>
          {emoji.content}
          <figcaption>{emoji.name}</figcaption>
        </figure>
      </div>

      <p>
        And since I don&apos;t know what the emoji will be when I&apos;m writing
        this, let me throw a random guess. Is it the <b>{guess.name}</b>?
        {guessText}
      </p>

      <p>
        If you <a href="/">refresh</a> the page, you&apos;ll get a new emoji, so{' '}
        {getRandomSample(textOptions.youGetIt)}. I, myself, probably
        haven&apos;t seen {getRandomSample(textOptions.thisVersion)}, and
        it&apos;s safe to say no one has, either. Currently, there are{' '}
        {possibleCombinations} possible combinations.
      </p>

      <p>
        Wait, that can&apos;t be right. Let&apos;s see...{' '}
        {textOptions.greetings.length} possible greetings, multiplied by{' '}
        {textOptions.greetingsFollowUp.length} possible follow ups. Then,
        multiplied by {textOptions.emoji.length} possible emojis and{' '}
        {textOptions.colors.length} possible colors for the background and{' '}
        {textOptions.colors.length} for the border, and{' '}
        {textOptions.colorAdjective.length} possible adjectives for the colors
        and... Wow, that&apos;s{' '}
        {new Intl.NumberFormat('en-US').format(
          textOptions.greetings.length *
            textOptions.greetingsFollowUp.length *
            textOptions.emoji.length *
            textOptions.colors.length *
            textOptions.colors.length *
            textOptions.colorAdjective.length,
        )}{' '}
        different possibilities already, and I haven&apos;t even counted all the
        different ways I can ask you to refresh the page and at least a dozen
        other things. Yeah, okay.
      </p>

      <p>
        So, if my math is right, this version of the website has one in{' '}
        {possibleCombinations} chances of existing. It is
        {getRandomSample(textOptions.purposes)} <b>unique</b>.
      </p>

      <p>
        The version of the website you&apos;re seeing is yours, and yours only.
        Enjoy it. And then, refresh the page (as I&apos;m sure you&apos;ve
        already done {getRandomSample(textOptions.alreadyDone)}). But remember:
        this version of the website will be gone forever. This is a unique
        experience, and I think that&apos;s fascinating!
      </p>

      <p>
        But you know what&apos;s even more fascinating? The fact that your
        experience visiting this website is unique regardless of how this site
        behaves. You are a unique person, with a unique combination of genetic
        attributes and past experiences that allows you -- and only you -- to
        have this experience.
      </p>

      <p>
        You are the only person in the entire history of the universe to see
        this site through your eyes, to think what you are thinking in response
        to it, to feel what you&apos;re feeling now.
      </p>

      <p>
        Even if another person gets this same version of the site, with the same
        emoji and the same background and the same border, that person will be
        informed by different past experiences and a different set of genetic
        traits. They will be in a different place, in a different time. Maybe
        they speak a different language, they&apos;re younger or older than you
        are. They grew up in a different family, have a different job, have a
        different favorite movie.
      </p>

      <p>
        Even if they are right next to you, right now, they are seeing the page
        from a slightly different angle, from a different set of eyes. They are
        breathing a different group of air molecules. Their heart, beating at a
        different rate. The colors they see are not the ones you see. You are
        the only person able to experience this moment as you are experiencing
        it.
      </p>

      <p>
        All of your experiences are unique, always, because you are unique! You
        are a unique combination of so many variables it&apos;s impossible to
        exist someone exactly like you in the entire history of humanity.
      </p>

      <p>
        So enjoy! Cry and laugh and get angry and be happy. Taste something new,
        or something you have always loved. Listen to that old song you love so
        much, or to a new one! Dance, or be that person who never dances --
        either is fine, really. Love the things you love. Enjoy your unique
        experience in this crazy universe of infinite possibilities.
      </p>

      <p>And, whatever you do, be yourself. No one else can do it for you.</p>
    </article>
  )
}

export default Home
