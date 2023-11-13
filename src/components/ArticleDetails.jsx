import React from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleDetails() {

    const {id} = useParams()
  return (
    <div>
        <h1>Le detail de l'article {id}</h1>
    </div>
  )
}
