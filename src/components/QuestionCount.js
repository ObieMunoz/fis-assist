import React from "react";

function QuestionCount(assignment) {
  return (
    <p id="question-count">
      <em>
        {assignment?.questions?.length > 0
          ? assignment?.questions?.length > 1
            ? `${assignment?.questions?.length} questions`
            : `${assignment?.questions?.length} question`
          : "No questions"}
      </em>
    </p>
  );
}

export default QuestionCount;
