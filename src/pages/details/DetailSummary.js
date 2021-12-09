import ReactMarkdown from "react-markdown";

export default function DetailSummary({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id} className="assignment-summary">
          <h2 className="page-title">{question.question}</h2>
          {question.answer === null ? (
            "This question has not been answered"
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
      ))}
    </div>
  );
}
