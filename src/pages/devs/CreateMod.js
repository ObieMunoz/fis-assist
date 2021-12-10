import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Select from "react-select";

const CreateMod = ({ courses }) => {
  const courseOpts = courses.map((c) => {
    return { value: `${c.id}`, label: `${c.title}` };
  });

  const [title, setTitle] = useState("");
  const [course_id, setCourse_id] = useState("");

  const { postData, data } = useFetch(
    "https://nameless-ocean-53939.herokuapp.com/mods",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, course_id });
    if (data !== null) {
      setTitle("");
      setCourse_id("");
    }
  };

  return (
    <div className="create-form">
      <h1>Create a new Mod:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            required
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Course:</span>
          <Select
            className="select"
            name="mod_id"
            onChange={(option) => setCourse_id(option)}
            value={course_id}
            options={courseOpts}
          />
        </label>

        <button className="btn">Add Mod</button>
      </form>
    </div>
  );
};

export default CreateMod;
