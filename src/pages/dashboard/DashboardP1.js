import { useState, useEffect } from "react";

// components

import AssignmentList from "../../components/AssignmentList";
// styles
import "./Dashboard.css";

const DashboardPh1 = () => {
  const url = "https://fis-assist.herokuapp.com/course/2/assignments";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2 className="page-title">Phase 1 Assignments</h2>
      {data.length === 0 ? (
        <p className="no-assignments">
          No Assignments Uploaded - Please Check Again Soon
        </p>
      ) : (
        <AssignmentList assignments={data} />
      )}
    </div>
  );
};

export default DashboardPh1;
