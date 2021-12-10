import { useState, useEffect } from "react";

// components

import AssignmentList from "../../components/AssignmentList";
// styles
import "./Dashboard.css";

const DashboardP2 = () => {
  const url = "https://nameless-ocean-53939.herokuapp.com/course/3/assignments";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="page-title">Phase 2 Assignments</h2>
        {data.length === 0 ? (
          <p className="no-assignments">
            No Assignments Uploaded - Please Check Again Soon
          </p>
        ) : (
          <AssignmentList assignments={data} />
        )}
      </div>
    </div>
  );
};

export default DashboardP2;
