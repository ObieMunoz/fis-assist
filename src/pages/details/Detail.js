import { useParams } from "react-router-dom"
import { useFetch } from '../../hooks/useFetch'

// components
import DetailSummary from './DetailSummary'
// styles
import './Detail.css'

export default function Project() {
  const { id } = useParams()
  const { data } = useFetch(`http://localhost:9292/assignment/${id}`)

  return (
    <div className="assignment-details">
      {data && <DetailSummary assignment={data}/>}
    </div>
  )
}