import React, { useState } from "react";
import ".././styles.css";
function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    // console.log("test");

    const { id, value } = e.target;
    if (id === "firstName") setFirstName(value);
    if (id === "lastName") setLastName(value);
    if (id === "email") setemail(value);
    if (id === "password") setPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
  }
  const handleSubmit = (e) => {
    console.log(firstName, lastName, email, password, confirmPassword);
    e.preventDefault();
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form_input"
            type="text"
            id="firstName"
            placeholder="Your First Name"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form_input"
            type="text"
            id="lastName"
            placeholder="Your Last Name"
            value={lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form_input"
            type="email"
            id="email"
            placeholder="Your email please"
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form_input"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="form_input"
            type="text"
            id="confirmPassword"
            placeholder="Confirmed password"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div class="footer">
          <button onClick={(e) => handleSubmit(e)} type="submit" class="btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
