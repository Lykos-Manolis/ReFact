import React from 'react'
import Header from './Header'
import Quote from './Quote'
import Button from './Button'

const Hero = ({ quote, buttonClick }) => {
  return (
    <div className="hero">
        <Header/>
        <Quote text={quote}/>
        <Button onClick={() => buttonClick('random')}/>
    </div>
  )
}

export default Hero