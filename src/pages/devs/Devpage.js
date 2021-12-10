
import { useState, useEffect } from 'react'
import axios from 'axios'
import CreateAssignment from './CreateAssignment'
import CreateCourse from './CreateCourse'
import CreateMod from './CreateMod'
import CreateDevQuestion from './CreateDevQuestion'

const Devpage = () => {


  const [courses, setCourses] = useState([])
  const [mods, setMods] = useState([])

  const fetchData = () => {
    const coursesUrl = 'http://localhost:9292/courses'
    const modsUrl = 'http://localhost:9292/mods'
    const getCourses = axios.get(coursesUrl)
    const getMods = axios.get(modsUrl)
    axios.all([getCourses, getMods]).then(
      axios.spread((...allData) => {
        const allCoursesData = allData[0].data
        const allModsData = allData[1].data
        setCourses(allCoursesData)
        setMods(allModsData)
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return ( 
    <div>
      <h1>Dev Tools</h1>
        <CreateAssignment mods={mods}/>
        <CreateCourse />
        <CreateMod courses={courses}/>
        <CreateDevQuestion />       
    </div>
   );
}
 
export default Devpage;