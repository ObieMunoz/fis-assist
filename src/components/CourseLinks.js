import { NavLink } from 'react-router-dom'
import DashboardIcon from '../assets/dashboard_icon.svg'


const CourseLinks = ({courses}) => {
  return ( 
    <li>
    <NavLink exact to={courses.id === 1? '/' : `/phase${courses.id - 1}`}>
      <img src={DashboardIcon} alt="dashboard icon" />
      <span>{courses.title}</span>
    </NavLink>
  </li>
   );
}
 
export default CourseLinks;