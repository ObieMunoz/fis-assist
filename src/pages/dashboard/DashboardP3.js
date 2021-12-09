import {useState, useEffect} from 'react'

// components

import AssignmentList from '../../components/AssignmentList'
// styles
import './Dashboard.css'


const DashboardP3 = () => {

  const url = "http://localhost:9292/course/4/assignments"
  const [data, setData] = useState([])
  useEffect(() => {
  fetch(url)
    .then((r) => r.json())
    .then(data => setData(data));
  }, [])
  return ( 
    <div>
      <h2 className="page-title">Phase 3 Assignments</h2>
      {data.length === 0 ? (
      <p className="no-assignments">No Assignments Uploaded - Please Check Again Soon</p> 
      ) : (
      <AssignmentList assignments={data}/>
      )}
    </div>
   );
}
 
export default DashboardP3;