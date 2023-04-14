import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <ul className='nav-bar'>
        <li><Link to={'/array'} style={{textDecoration:"none"}}>Array</Link></li>
        <li><Link to={'/linkedlist'} style={{textDecoration:"none"}}>LinkedList</Link></li>
        <li><Link to={'/stack'} style={{textDecoration:"none"}}>Stack</Link></li>
        <li><Link to={'/queue'} style={{textDecoration:"none"}}>Queue</Link></li>
        <li><Link to={'/recursion'} style={{textDecoration:"none"}}>Recursion</Link></li>
        <li><Link to={'/dynamicProgramming'} style={{textDecoration:"none"}}>Dynamic Programming</Link></li>
        <li><Link to={'/graph'} style={{textDecoration:"none"}}>Graph</Link></li>
        <li><Link to={'/backtracking'} style={{textDecoration:"none"}}>Backtracking</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
