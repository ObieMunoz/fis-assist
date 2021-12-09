import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Select from "react-select";
import axios from "axios";
import { useHistory } from "react-router";

// styles
import "./Create.css";

export default function Create() {
  const history = useHistory();

  // populating Select Variables
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const fetchData = () => {
    const studentsUrl = "http://localhost:9292/students";
    const assignmentsUrl = "http://localhost:9292/assignments";
    const getStudents = axios.get(studentsUrl);
    const getAssignments = axios.get(assignmentsUrl);
    axios.all([getStudents, getAssignments]).then(
      axios.spread((...allData) => {
        const allStudentData = allData[0].data;
        const allAssignmentData = allData[1].data;
        setStudents(allStudentData);
        setAssignments(allAssignmentData);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  // create user values for react-select

  const studentOpts = students.map((s) => {
    return {
      value: `${s.id}`,
      label: `${s.last_name}, ${s.first_name}`,
    };
  });

  const assignmentOpts = assignments.map((assignment) => {
    return {
      value: `${assignment.id}`,
      label: `${assignment.title}`,
    };
  });

  const { postData, data } = useFetch(
    "http://localhost:9292/questions",
    "POST"
  );
  // form field values
  const [question, setQuestion] = useState("");
  const [studentId, setStudentId] = useState("");
  const [assignmentId, setAssignmentId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ question, answer: null, studentId, assignmentId });
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);

  return (
    <div className="create-form">
      <h2 className="page-title">Submit a new Question:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Question:</span>
          <input
            required
            name="question"
            type="text"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
        </label>
        <label>
          <span>Student:</span>
          <Select
            className="select"
            name="student_id"
            onChange={(option) => setStudentId(option)}
            value={studentId}
            options={studentOpts}
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
      <div className="user">
        <h2 className="page-title">Name not appearing?</h2>
        <button
          className="new-student"
          onClick={() => history.push("/newstudent")}
        >
          Create New Student
        </button>
      </div>
    </div>
  );
}
