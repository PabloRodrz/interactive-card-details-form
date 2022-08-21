import { React } from "react";

const Form = (props) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleSubmit}>
        <div className="input-container">
        <label>CARDHOLDER NAME</label>
        <input className={props.isInvalid.fullnameIsInvalid}
          type="text"
          pattern="[A-Za-z\s]*"
          name="fullname"
          placeholder="e.g Jane Appleseed"
          onChange={props.handleChange}
          value={props.user.fullname}
          />
          {props.isInvalid.fullnameIsInvalid && <div className="invalidInput">Fill with your name</div> }
          </div>
        <label>CARD NUMBER</label>
        <input className={props.isInvalid.cardnumberIsInvalid}
          maxLength={16}
          type="text"
          pattern="[0-9]*"
          name="cardnumber"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={props.handleChange}
          value={props.user.cardnumber}
        />
        <div className="lastformpart">
          <div style={{ display: "block" }}>
            <label>EXP. DATE (MM/YY)</label>
            <input 
              maxLength={2}
              className={`form-month ${props.isInvalid.expmonthIsInvalid}`}
              pattern="[0-9]*"
              type="text"
              name="expmonth"
              placeholder="MM"
              onChange={props.handleChange}
              value={props.user.expmonth}
            />
            <input 
              maxLength={2}
              className={`form-year ${props.isInvalid.expyearIsInvalid}`}
              pattern="[0-9]*"
              type="text"
              name="expyear"
              placeholder="YY"
              onChange={props.handleChange}
              value={props.user.expyear}
            />
          </div>
          <div style={{ display: "block" }}>
            <label>CVC</label>
            <input 
              maxLength={3}
              className={`form-cvc ${props.isInvalid.cvcIsInvalid}`}
              pattern="[0-9]*"
              type="text"
              name="cvc"
              placeholder="e.g. 123"
              onChange={props.handleChange}
              value={props.user.cvc}
            />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  )
}

export default Form