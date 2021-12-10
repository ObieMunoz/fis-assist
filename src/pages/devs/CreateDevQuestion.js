import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const CreateDevQuestion = () => {


  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const { postData, data } = useFetch('http://localhost:9292/questions', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ question, answer })
    if (data !== null) {
      setQuestion('')
      setAnswer('')
    }
}

  return ( 
      <div className="create-form">
        <h1>Create a new Question:</h1>
          <form onSubmit={handleSubmit}>
          <label>
              <span>Question:</span>
              <input
                required
                name="title" 
                type="text"
                value={question}
                onChange={(e)=> setQuestion(e.target.value)}
              />
            </label>
            <label>
              <span>Description:</span>
              <input
                required
                name="description" 
                type="text"
                value={answer}
                onChange={(e)=> setAnswer(e.target.value)}
              />
            </label>
            <button className="btn">Add Course</button>
          </form>
      </div>
   );
}
 
export default CreateDevQuestion;