import { Link } from "react-router-dom";
import QuestionCount from "./QuestionCount";

//styles
import "./AssignmentList.css";

const AssignmentList = ({ assignments }) => {
  return (
    <div className="assignment-list">
      {assignments.map((assignment) => (
        <Link to={`/details/${assignment.id}`} key={assignment.id}>
          <h4 className="page-title">
            {assignment.title}
            {QuestionCount(assignment)}
          </h4>
          <p id="assignment-description">{assignment.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default AssignmentList;
