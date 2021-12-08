import { NavLink } from "react-router-dom"

// components
// import Avatar from "./Avatar"

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'


export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* <Avatar src={"../assets/Hawks300.jpg"} /> */}
          <p>Hello Student</p>  
        </div>  
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Phase 1</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/phase2">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Phase 2 </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/phase3">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Phase 3 </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/phase4">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Phase 4 </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Question</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}