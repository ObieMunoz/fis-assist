import { useLocation } from "react-router";
import AssignmentList from "../../components/AssignmentList";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:9292/assignments?q=" + query;
  const { error, isPending, data } = useFetch(url);

  // console.log(query, data)

  return (
    <div>
      <h2 className="page-title">Assignments including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading... </p>}
      {data && <AssignmentList assignments={data} />}
    </div>
  );
};

export default Search;
