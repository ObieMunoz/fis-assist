import { Link } from 'react-router-dom'

// styles & images
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {

  return (
    <nav className="navbar">
      <ul>
          <li className="logo">
            <h1>//FIS-Assist</h1>
          </li>
          <>
            <li><Link to="/about">About Us</Link></li>
            <Searchbar />
          </>
      </ul>
    </nav>
  )
}