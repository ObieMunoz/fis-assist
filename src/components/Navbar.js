import { Link } from 'react-router-dom'

// styles & images
import './Navbar.css'

export default function Navbar() {

  return (
    <nav className="navbar">
      <ul>
          <li className="logo">
            <h1>//FIS-Assist</h1>
          </li>
          <>
            <li><Link to="/login">Do Something</Link></li>
            <li><Link to="/signup">Go Somewhere</Link></li>
          </>
      </ul>
    </nav>
  )
}