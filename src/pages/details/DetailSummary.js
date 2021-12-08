

export default function DetailSummary({assignment}) {

  console.log(assignment);
  return (
    <div>
      <div className="assignment-summary">
        <h2 className="page-title">{assignment.title}</h2>
        <p className="desc">{assignment.description}</p>
      </div>
    </div>
  )
}