import {useState, useEffect} from 'react'

// components
import AssignmentFilter from './AssignmentFilter'
import AssignmentList from '../../components/AssignmentList'
// styles
import './Dashboard.css'

export default function Dashboard() {
  const url = "http://localhost:9292/assignments"
  const [data, setData] = useState([])
  useEffect(() => {
  fetch(url)
    .then((r) => r.json())
    .then(data => setData(data));
  }, [])

console.log(data)


  
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      <AssignmentFilter />

      <AssignmentList assignments={data}/>
    </div>
  )
}