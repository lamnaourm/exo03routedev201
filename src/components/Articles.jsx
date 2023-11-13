import React from 'react'
import { Link } from 'react-router-dom'

export default function Articles() {
  return (
    <div>
        <h1>Page des articles</h1>

        <Link to='/articles/1'>Article 1</Link> <br />
        <Link to='/articles/2'>Article 2</Link> <br />
        <Link to='/articles/3'>Article 3</Link> <br />
        <Link to='/articles/4'>Article 4</Link> <br />
    </div>
  )
}
