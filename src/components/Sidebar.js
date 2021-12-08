import { NavLink } from "react-router-dom"
import CourseLinks from './CourseLinks'
import { useFetch } from '../hooks/useFetch'

// components
// import Avatar from "./Avatar"

// styles & images
import "./Sidebar.css"

import AddIcon from '../assets/add_icon.svg'


export default function Sidebar() {

  const { data } = useFetch(`http://localhost:9292/courses`)

  console.log(data)

  // const courseLinks = data.map((d)=> (
  //   <CourseLinks key={d.id} courses={d}/>
  // ))

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* <Avatar src={"../assets/Hawks300.jpg"} /> */}
          <p>Hello Student</p>  
        </div>  
        <nav className="links">
          <ul>
            {data && data.map((d)=> (
            <CourseLinks key={d.id} courses={d}/>
            ))}
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