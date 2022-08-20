import { React, useState } from "react";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import CardConfirmed from "./components/CardConfirmed";
function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [user, setUser] = useState({
    fullname: "",
    cardnumber: "",
    expmonth: "",
    expyear: "",
    cvc: ""
  })
  const [isInvalid, setIsInvalid] = useState(true)
  const [userToShow, setUserToShow] = useState({
    fullname: "Jane Appleseed",
    cardnumber: "0000 0000 0000 0000",
    expmonth: "00",
    expyear: "00",
    cvc: "123"
  })

  
  const handleChange = (e) => {
    switch (e.target.name) {
      case "fullname":
        if (e.target.value === "") {
          setUser(prevUser => ({ ...prevUser, fullname: e.target.value }))
        }
        if (e.target.validity.valid) {
          setUser(prevUser => ({ ...prevUser, fullname: e.target.value }))
        }
        break;
        case "cardnumber":
          if (e.target.value === "") {
            setUser(prevUser => ({ ...prevUser, cardnumber: e.target.value }))
          }
          if (e.target.validity.valid) {
            setUser(prevUser => ({ ...prevUser, cardnumber: e.target.value }))
          }
          showCardnumber()
          break
          case "expmonth":
        if (e.target.value === "") {
          setUser(prevUser => ({ ...prevUser, expmonth: e.target.value }))
        }
        if (e.target.validity.valid) {
          setUser(prevUser => ({ ...prevUser, expmonth: e.target.value }))
        }
        break
        case "expyear":
          if (e.target.value === "") {
            setUser(prevUser => ({ ...prevUser, expyear: e.target.value }))
          }
          if (e.target.validity.valid) {
            setUser(prevUser => ({ ...prevUser, expyear: e.target.value }))
          }
          break
          case "cvc":
            if (e.target.value === "") {
              setUser(prevUser => ({ ...prevUser, cvc: e.target.value }))
            }
            if (e.target.validity.valid) {
          setUser(prevUser => ({ ...prevUser, cvc: e.target.value }))
        }
        break
        default:
          break;
    }
  }
  const showCardnumber = () => {
    console.log("Show cardnumber")
    let newCardnumberToShow = userToShow.cardnumber.split("")
    let newCardnumber = user.cardnumber.split("")
    console.log(newCardnumber)
    console.log(newCardnumberToShow)
    for (let i = 0; i < user.cardnumber.length; i++) {
      console.log("for")
     newCardnumberToShow[i] = newCardnumber[i]
    }
    console.log(newCardnumber)
    setUserToShow(prevState => ({
      ...prevState, cardnumber: newCardnumber
    }))
  }
  const handleSubmit = (e) => {
    //usar isInvalid para cambiar el borde a rojo y mostrar un mensajito de que está mal en los inputs
    //chequear número máximo en mes y año 
    e.preventDefault()
    if (user.fullname.length < 6) {
      setIsInvalid(true)
      return
    } else {
      setIsInvalid(false)
    }
    if (user.cardnumber.length < 16) {
      setIsInvalid(true)
      return
    } else {
      setIsInvalid(false)
    }
    if (user.expmonth.length < 2) {
      setIsInvalid(true)
      return
    } else {
      setIsInvalid(false)
    }
    if (user.expyear.length < 2) {
      setIsInvalid(true)
      return
    } else {
      setIsInvalid(false)
    }
    if (user.cvc.length < 3) {
      setIsInvalid(true)
      return
    } else {
      setIsInvalid(false)
    }

    setFormSubmitted(true)
  }
  return (
    <div className="app">
      <Sidebar user={user} userToShow={userToShow} />
      {formSubmitted
        ? <CardConfirmed
          user={user}
          setUser={setUser}
          setFormSubmitted={setFormSubmitted} />
        : <Form user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isInvalid={isInvalid} />}
    </div>
  );
}

export default App;
