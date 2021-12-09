import { Link } from "react-router-dom";

//styles
import "./AssignmentList.css";

const AssignmentList = ({ assignments }) => {
  return (
    <div className="assignment-list">
      {assignments.map((assignment) => (
        <Link to={`/details/${assignment.id}`} key={assignment.id}>
          <h4 className="page-title">
            {assignment.title}
            <p id="question-count">
              <em>
                {assignment?.questions?.length > 0
                  ? assignment?.questions?.length > 1
                    ? `${assignment?.questions?.length} questions`
                    : `${assignment?.questions?.length} question`
                  : "No questions"}
              </em>
            </p>
          </h4>
          <p id="assignment-description">{assignment.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default AssignmentList;
