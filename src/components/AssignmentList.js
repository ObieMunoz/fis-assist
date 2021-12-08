import {Link} from 'react-router-dom'

//styles
import "./AssignmentList.css"

const AssignmentList = ({assignments}) => {
  return ( 
    <div className="assignment-list">
      {assignments.map((assignment) => (
      <Link to={`/details/${assignment.id}`} key={assignment.id}>
        <h4 className="page-title">{assignment.title}</h4>
        <p>{assignment.description.substring(0,50)}...</p>
      </Link>
      ))}
    </div>
   );
}
 
export default AssignmentList;