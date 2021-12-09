import ReactMarkdown from 'react-markdown'

export default function DetailSummary({questions}) {

  return (
    <div>
      {questions.map((question) =>(
      <div key={question.id} className="assignment-summary">
        <h2 className="page-title">{question.question}</h2>
        <ReactMarkdown className="desc">{question.answer === null ? "this question has not been answered" : question.answer.replace(/["]g/, '')}</ReactMarkdown>
      </div>))}
    </div>
  )
}