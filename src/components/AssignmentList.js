import { Link } from "react-router-dom";

//styles
import "./AssignmentList.css";

const AssignmentList = ({ assignments }) => {
  return (
    <div className="assignment-list">
      {assignments.map((assignment) => (
        <Link to={`/details/${assignment.id}`} key={assignment.id}>
          <h4 className="page-title">{assignment.title}</h4>
          <p>{assignment.description}</p>
          <p className="question-count">
            <em>
              {assignment?.questions?.length > 0
                ? assignment?.questions?.length > 1
                  ? `${assignment?.questions?.length} questions`
                  : `${assignment?.questions?.length} question`
                : "No questions"}
            </em>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default AssignmentList;
