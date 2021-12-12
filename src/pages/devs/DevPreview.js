import React from 'react'
import ReactMarkdown from "react-markdown";

function DevPreview({ question, answer }) {
    if ((question && answer) === null || (question && answer) === undefined || (question && answer) === '') {
        return (
            <></>
        )
    }
    return (
        <div className="assignment-summary">
            <h2 className="page-title">{question}</h2>
            <ReactMarkdown
                className="desc"
                children={answer}
            />
        </div>
    )
}

export default DevPreview