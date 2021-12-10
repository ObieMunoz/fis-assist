import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// components
import DetailSummary from "./DetailSummary";
// styles
import "./Detail.css";

export default function Project() {
  const { id } = useParams();
  const { data } = useFetch(
    `https://nameless-ocean-53939.herokuapp.com/assignment/${id}/questions`
  );

  return (
    <div className="assignment-details">
      {data && <DetailSummary questions={data} />}
    </div>
  );
}
