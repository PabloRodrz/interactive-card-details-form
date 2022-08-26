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
          {props.isInvalid.fullnameIsInvalid && <div className="invalidInput">Fill with your name</div>}
        </div>
        <div className="input-container">
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
          {props.isInvalid.cardnumberIsInvalid && <div className="invalidInput">Card number must have 16 numbers</div>}
        </div>
        <div className="lastformpart">
          <div className="input-container">
            <label>EXP. DATE (MM/YY)</label>
            <div className="form-month">
              <input
                maxLength={2}
                className={`${props.isInvalid.expmonthIsInvalid} ${props.isInvalid.monthValueIsInvalid}`}
                pattern="[0-9]*"
                type="text"
                name="expmonth"
                placeholder="MM"
                onChange={props.handleChange}
                value={props.user.expmonth}
              />
            </div>
            <div className="form-year">
              <input
                maxLength={2}
                className={`${props.isInvalid.expyearIsInvalid}`}
                pattern="[0-9]*"
                type="text"
                name="expyear"
                placeholder="YY"
                onChange={props.handleChange}
                value={props.user.expyear}
              />
            </div>
            {props.isInvalid.expmonthIsInvalid && <div className="invalidInputMonth">Month should have 2 numbers</div>}
            {props.isInvalid.expyearIsInvalid && <div className="invalidInputMonth">Year should have 2 numbers</div>}
            {props.isInvalid.monthValueIsInvalid && <div className="invalidInputMonth">Month should be a number between 01 and 12</div>}
          </div>
          <div className="input-container">
            <label className="label-cvc">CVC</label>
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
            {props.isInvalid.cvcIsInvalid && <div className="invalidInputCVC">CVC should have 3 numbers</div>}
          </div>
        </div>


        <button>Confirm</button>
      </form>
    </div>
  )
}

export default Form