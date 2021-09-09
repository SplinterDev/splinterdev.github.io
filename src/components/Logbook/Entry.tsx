import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const Entry = (): React.ReactElement => {
  const { entryDate } = useParams<{ entryDate: string }>()
  const [entry, setEntry] = useState<string>()

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/SplinterDev/fjcm/main/src/assets/logbook/${entryDate}.md`,
    )
      .then((response) => response.text())
      .then((text) => {
        setEntry(text)
      })
  }, [entryDate])

  if (entry) {
    return (
      <article>
        <ReactMarkdown>{entry}</ReactMarkdown>
      </article>
    )
  }
  return <div>Loading</div>
}

export default Entry
