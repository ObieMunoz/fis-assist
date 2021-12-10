import { useState, useEffect } from "react";
import axios from "axios";
import CreateAssignment from "./CreateAssignment";
import CreateCourse from "./CreateCourse";
import CreateMod from "./CreateMod";
import CreateDevQuestion from "./CreateDevQuestion";

const Devpage = () => {
  const [courses, setCourses] = useState([]);
  const [mods, setMods] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const fetchData = () => {
    const coursesUrl = "http://localhost:9292/courses";
    const modsUrl = "http://localhost:9292/mods";
    const assignmentsUrl = "http://localhost:9292/assignments";
    const getCourses = axios.get(coursesUrl);
    const getMods = axios.get(modsUrl);
    const getAssignments = axios.get(assignmentsUrl);
    axios.all([getCourses, getMods, getAssignments]).then(
      axios.spread((...allData) => {
        const allCoursesData = allData[0].data;
        const allModsData = allData[1].data;
        const allAssignmentsData = allData[2].data;
        setCourses(allCoursesData);
        setMods(allModsData);
        setAssignments(allAssignmentsData);
        console.log(allAssignmentsData);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dev Tools</h1>
      <CreateCourse />
      <CreateMod courses={courses} />
      <CreateAssignment mods={mods} />
      <CreateDevQuestion assignments={assignments} />
    </div>
  );
};

export default Devpage;
