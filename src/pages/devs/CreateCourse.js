import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { postData, data } = useFetch(
    "https://nameless-ocean-53939.herokuapp.com/courses",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, description });
    if (data !== null) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="create-form">
      <h1>Create a new Course:</h1>
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
          <span>Description:</span>
          <input
            required
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button className="btn">Add Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
