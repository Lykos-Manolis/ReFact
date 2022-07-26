import React from 'react'

const Button = ({ onClick }) => {
  return (
    <div className="btn-container">
      <button onClick={onClick}>GET NEW FACT</button>
    </div>
  )
}

export default Button