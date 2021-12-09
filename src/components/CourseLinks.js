import { NavLink } from 'react-router-dom'
import DashboardIcon from '../assets/dashboard_icon.svg'


const CourseLinks = ({courses}) => {
  return ( 
    <li>
    <NavLink exact to={courses.title === "Prework"? '/' : `/phase${courses.id}`}>
      <img src={DashboardIcon} alt="dashboard icon" />
      <span>{courses.title}</span>
    </NavLink>
  </li>
   );
}
 
export default CourseLinks;