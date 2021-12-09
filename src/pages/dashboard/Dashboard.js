import {useState, useEffect} from 'react'

// components

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
  
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      <AssignmentList assignments={data}/>
    </div>
  )
}