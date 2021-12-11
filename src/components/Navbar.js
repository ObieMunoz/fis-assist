import { Link } from "react-router-dom";
import Logo from "../assets/fis_logo.svg";

// styles & images
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="logo" />
        </li>
        <>
          <Searchbar />
          <li>
            <Link to="/fis-assist/about">About Us</Link>
          </li>
        </>
      </ul>
    </nav>
  );
}
