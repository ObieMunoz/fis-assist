

export default function DetailSummary({questions}) {

  return (
    <div>
      {questions.map((question) =>(
      <div key={question.id} className="assignment-summary">
        <h2 className="page-title">{question.question}</h2>
        <p className="desc">{question.answer}</p>
      </div>))}
    </div>
  )
}