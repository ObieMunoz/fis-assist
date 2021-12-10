import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export default function DetailSummary({ questions }) {
  const questionList = questions.map((question) => {
    return (
      <div key={question.id} className="assignment-summary">
        <h2 className="page-title">{question.question}</h2>
        {question.answer === null ? (
          <p>No answer provided</p>
        ) : (
          <ReactMarkdown
            className="desc"
            children={question.answer
              .split("\n")
              .map((line) => line.trim())
              .join("\n")}
          />
        )}
      </div>
    );
  });

  return (
    <div>
      <h1>Assignment Questions</h1>
      {questionList.length === 0 ? (
        <>
          <p>
            <em>No questions have been added to this assignment</em>
          </p>
          <Link to="/create" className="question-btn">
            Ask a Question!
          </Link>
        </>
      ) : (
        questionList
      )}
    </div>
  );
}
