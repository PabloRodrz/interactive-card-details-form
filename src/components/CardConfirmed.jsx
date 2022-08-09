import React from 'react'
import iconComplete from '../images/icon-complete.svg'
function CardConfirmed({ setFormSubmitted, user, setUser, userToShow, setUserToShow }) {
  const handleChange = () => {
    setFormSubmitted(false)
    setUser(user = {
      fullname: "",
      cardnumber: "",
      expmonth: "",
      expyear: "",
      cvc: ""
    })
  }
  return (
    <div className='cardconfirmed-container'>
      <div className='cardconfirmed'>
        <img src={iconComplete} alt="success" />
        <h1>THANK YOU!</h1>
        <h4>We've added your card details</h4>
        <button onClick={handleChange}>Continue</button>
      </div>
    </div>
  )
}

export default CardConfirmed