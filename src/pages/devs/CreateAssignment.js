import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Select from "react-select";

const CreateAssignment = ({ mods }) => {
  const modOpts = mods.map((m) => {
    return { value: `${m.id}`, label: `${m.title}` };
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mod_id, setMod_id] = useState("");

  const { postData, data } = useFetch(
    "https://nameless-ocean-53939.herokuapp.com/assignments",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, description, mod_id });
    if (data !== null) {
      setTitle("");
      setDescription("");
      setMod_id("");
    }
  };

  return (
    <div className="create-form">
      <h1>Create a new Assignment:</h1>
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
        <label>
          <span>Mod:</span>
          <Select
            className="select"
            name="mod_id"
            onChange={(option) => setMod_id(option)}
            value={mod_id}
            options={modOpts}
          />
        </label>

        <button className="btn">Add Assignment</button>
      </form>
    </div>
  );
};

export default CreateAssignment;
