import React from 'react'
import sideimg from '../images/bg-main-desktop.png'
import frontcard from '../images/bg-card-front.png'
import backcard from '../images/bg-card-back.png'
import cardlogo from '../images/card-logo.svg'
function Sidebar({ user, userToShow }) {

  let userCardnumberWithSpaces = ""
  function cardnumberAddSpaces(cardnumber, spaces) {
    cardnumber = user.cardnumber
    spaces = [4, 8, 12]
    let M = cardnumber.length
    let N = spaces.length
    let l = 0;
    let r = 0;
    userCardnumberWithSpaces = new Array(M + N).fill(' ');
    for (let i = 0; i < M + N; i++) {
      if (l < N && i === spaces[l] + l)
        l++;
      else
        userCardnumberWithSpaces[i] = cardnumber[r++];
    }
    return userCardnumberWithSpaces.join('');
  }

  cardnumberAddSpaces(user)
  return (
    <div className='sidebar-container'>
      <div className="sidebar-background-image">
        <img src={sideimg} alt="sideimg" />
      </div>
      <div className='front-card'>
        <img src={frontcard} alt="frontcard" />
        <img className='card-logo' src={cardlogo} alt="cardlogo" />
        {user.cardnumber ? <span className='frontcard-cardnumber'>{userToShow.cardnumber}</span>
          : <span className='frontcard-cardnumber'>{userToShow.cardnumber}</span>}
        {user.fullname ? <span className="frontcard-fullname">{user.fullname}</span>
          : <span className="frontcard-fullname">{userToShow.fullname}</span>
        }
        <span className="frontcard-expdate">{user.expmonth ? user.expmonth : userToShow.expmonth}/{user.expyear? user.expyear : userToShow.expyear}</span>
      </div>
      <div className='back-card'>
        <img src={backcard} alt="backcard" />
        {user.cvc ? <span>{user.cvc}</span> : <span>{userToShow.cvc}</span>}
      </div>
    </div>
  )
}

export default Sidebar