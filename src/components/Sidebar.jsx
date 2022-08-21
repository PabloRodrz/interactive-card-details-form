import React from 'react'
import sideimg from '../images/bg-main-desktop.png'
import frontcard from '../images/bg-card-front.png'
import backcard from '../images/bg-card-back.png'
import cardlogo from '../images/card-logo.svg'
function Sidebar({ user, userToShow }) {

  let userCardnumberWithSpaces = ""


  const updateValuesForShow = ( value, originalString ) => {
    if(!value){
      return;
    }
    
    let originalCardNumberSplitted = originalString.split("")
    for (let index = 0; index < value.length; index++) {
      if(index > 3 && index < 8 ){
        originalCardNumberSplitted[index + 1] = value[index];
        continue;
      }

      if(index > 7 && index < 12 ){
        originalCardNumberSplitted[index + 2] = value[index];
        continue;
      }

      
      if(index > 11 ){
        originalCardNumberSplitted[index + 3] = value[index];
        continue;
      }
      originalCardNumberSplitted[index] = value[index];
      
    }

   return originalCardNumberSplitted.join("");
    
  }

  userCardnumberWithSpaces = updateValuesForShow(user.cardnumber, userToShow.cardnumber)
  const monthToShow = updateValuesForShow(user.expmonth, userToShow.expmonth)
  const yearToShow = updateValuesForShow(user.expyear, userToShow.expyear)
  const cvcToShow = updateValuesForShow(user.cvc, userToShow.cvc)

  return (
    <div className='sidebar-container'>
      <div className="sidebar-background-image">
        <img src={sideimg} alt="sideimg" />
      </div>
      <div className='front-card'>
        <img src={frontcard} alt="frontcard" />
        <img className='card-logo' src={cardlogo} alt="cardlogo" />
        {user.cardnumber ? <span className='frontcard-cardnumber'>{userCardnumberWithSpaces}</span>
          : <span className='frontcard-cardnumber'>{userToShow.cardnumber}</span>}
        {user.fullname ? <span className="frontcard-fullname">{user.fullname}</span>
          : <span className="frontcard-fullname">{userToShow.fullname}</span>
        }
        <span className="frontcard-expdate">{user.expmonth ? monthToShow : userToShow.expmonth}/{user.expyear? yearToShow : userToShow.expyear}</span>
      </div>
      <div className='back-card'>
        <img src={backcard} alt="backcard" />
        {user.cvc ? <span>{cvcToShow}</span> : <span>{userToShow.cvc}</span>}
      </div>
    </div>
  )
}

export default Sidebar