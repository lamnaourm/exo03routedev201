import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Categories() {
  return (
    <div>
        <h1>Page des categories</h1>


        <Link to='/categories/voyage'>Voyage</Link> <br />
        <Link to='/categories/cuisine'>Cuisine</Link> <br />
        <Link to='/categories/technologie'>Technologie</Link> <br />
    </div>
  )
}
