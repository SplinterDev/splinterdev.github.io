import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const Entry = () => {
  const { entryDate } = useParams<{ entryDate: string }>()
  const [entry, setEntry] = useState<string>()

  useEffect(() => {
    // fetch(`../../assets/logbook/${entryDate}.md`)
    fetch(
      'https://raw.githubusercontent.com/SplinterDev/notes/main/context-notes.md',
    )
      .then((response) => response.text())
      .then((text) => {
        setEntry(text)
      })
  }, [])

  if (entry) {
    return <ReactMarkdown>{entry}</ReactMarkdown>
  }
  return <div>Loading</div>
}

export default Entry
