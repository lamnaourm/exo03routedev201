import React from 'react'
import { Link } from 'react-router-dom'

export default function Acceuil() {
  return (
    <div>
        <h1>Page d'acceuil</h1>

        <Link to='/articles'> Liste des articles</Link> <br />
        <Link to='/categories'> Liste des categories</Link> <br />
    </div>
  )
}
