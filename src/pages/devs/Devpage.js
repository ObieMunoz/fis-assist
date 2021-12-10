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
    const coursesUrl = "https://fis-assist.herokuapp.com/courses";
    const modsUrl = "https://fis-assist.herokuapp.com/mods";
    const assignmentsUrl = "https://fis-assist.herokuapp.com/assignments";
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
