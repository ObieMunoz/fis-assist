import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

const CreateStudent = () => {
  const history = useHistory();

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [slack_username, setSlack_username] = useState("");

  const { postData, data } = useFetch("http://localhost:9292/students", "POST");

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    postData({ first_name, last_name, email, slack_username });
  };

  useEffect(() => {
    if (data) {
      history.push("/create");
    }
  }, [data, history]);

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Student:</h2>
      <form onSubmit={handleStudentSubmit}>
        <label>
          <span>First Name:</span>
          <input
            required
            name="first_name"
            type="text"
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
          />
        </label>
        <label>
          <span>Last Name:</span>
          <input
            required
            name="last_name"
            type="text"
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            required
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Slack Username:</span>
          <input
            required
            name="slack_username"
            type="text"
            onChange={(e) => setSlack_username(e.target.value)}
            value={slack_username}
          />
        </label>
        <button className="btn">Add Student</button>
      </form>
    </div>
  );
};

export default CreateStudent;
