import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Select from "react-select";

const CreateDevQuestion = ({ assignments }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [assignmentId, setAssignmentId] = useState("");

  const assignmentOpts = assignments.map((a) => {
    return { value: `${a.id}`, label: `${a.title}` };
  });

  const { postData, data } = useFetch(
    "https://fis-assist.herokuapp.com/questions",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ question, answer, assignmentId });
    if (data !== null) {
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div className="create-form">
      <h1>Create a new Question:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Question:</span>
          <input
            required
            name="title"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <label>
          <span>Answer:</span>
          <textarea
            required
            name="description"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <label>
          <span>Assignment:</span>
          <Select
            className="select"
            name="assignment_id"
            onChange={(option) => setAssignmentId(option)}
            value={assignmentId}
            options={assignmentOpts}
          />
        </label>
        <button className="btn">Add Question</button>
      </form>
    </div>
  );
};

export default CreateDevQuestion;
