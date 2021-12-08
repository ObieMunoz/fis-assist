import { useState, useEffect } from 'react'

import { useHistory } from 'react-router'


// styles
import './Create.css'

const categories = [
  { value: 'setup', label: 'Setup' },
  { value: 'html', label: 'Html' },
  { value: 'css', label: 'CSS' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'dom', label: 'Dom Manipulation' }
]

export default function Create() {
  const history = useHistory()

  // form field values
  const [formData, setFormData] = useState('')


  // create user values for react-select


  return (
    <div className="create-form">
      <h2 className="page-title">Submit a new Question:</h2>
      <form>
      <label>
          <span>Question:</span>
          <input
            required 
            type="text" 
          />
        </label>
        <button className="btn">Add Question</button>
      </form>
    </div>
  )
}