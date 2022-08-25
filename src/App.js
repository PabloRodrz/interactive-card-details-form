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
  const [isInvalid, setIsInvalid] = useState({
    fullnameIsInvalid: "",
    cardnumberIsInvalid: "",
    expmonthIsInvalid: "",
    expyearIsInvalid: "",
    cvcIsInvalid: ""
  })

  const userToShow = {
    fullname: "Jane Appleseed",
    cardnumber: "0000 0000 0000 0000",
    expmonth: "00",
    expyear: "00",
    cvc: "123"
  }

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

  const handleSubmit = (e) => {
    e.preventDefault()
    let isFormInvalid = false
    let isInvalidCopy = {
      ...isInvalid
    }
    if (user.fullname.length < 6) {
      isInvalidCopy.fullnameIsInvalid = "invalid"
      isFormInvalid = true
    } else {
      isInvalidCopy.fullnameIsInvalid = ""
    }
    if (user.cardnumber.length < 16) {
      isInvalidCopy.cardnumberIsInvalid = "invalid"
      isFormInvalid = true
    } else {
      isInvalidCopy.cardnumberIsInvalid = ""
    }
    if (user.expmonth.length < 2) {
      isInvalidCopy.expmonthIsInvalid = "invalid"
      isFormInvalid = true
    } else {
      isInvalidCopy.expmonthIsInvalid = ""
    }
    if (user.expyear.length < 2) {
      isInvalidCopy.expyearIsInvalid = "invalid"
      isFormInvalid = true
    } else {
      isInvalidCopy.expyearIsInvalid = ""
    }
    if (user.cvc.length < 3) {
      isInvalidCopy.cvcIsInvalid = "invalid"
      isFormInvalid = true
    } else {
      isInvalidCopy.cvcIsInvalid = ""
    }
    setIsInvalid(isInvalidCopy)
    if (isFormInvalid) {
      return
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
