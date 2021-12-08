import { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { useHistory } from 'react-router'


// styles
import './Create.css'

const categories = [
  { value: 'setup', label: 'Setup' },
  { value: 'html', label: 'Html' },
  { value: 'css', label: 'CSS' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'dom', label: 'Dom Manipulation' }
]

export default function Create() {
  const history = useHistory()

  // form field values
  const [formData, setFormData] = useState('')

  // populating Select Variables
  const [students, setStudents] = useState([])
  const [assignments, setAssignments] = useState([])

  const fetchData = () => {
    const studentsUrl = 'http://localhost:9292/students'
    const assignmentsUrl = 'http://localhost:9292/assignments'
    const getStudents = axios.get(studentsUrl)
    const getAssignments = axios.get(assignmentsUrl)
    axios.all([getStudents, getAssignments]).then(
      axios.spread((...allData) => {
        const allStudentData = allData[0].data
        const allAssignmentData = allData[1].data
        console.log(allData[0].data)
        setStudents(allStudentData)
        setAssignments(allAssignmentData)
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])
  // create user values for react-select


  return (
    <div className="create-form">
      <h2 className="page-title">Submit a new Question:</h2>
      <form>
      <label>
          <span>Question:</span>
          <input
            required 
            type="text" 
          />
        </label>
        <button className="btn">Add Question</button>
      </form>
    </div>
  )
}