import React from 'react'
import '../assets/style/ErrorMessage.css'
const ErrorMessage = ({message}) => {
    return (
        <div className="error-message-container">
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage
