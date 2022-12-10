import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "../Components/LandingPage.css";
import wheel from "../Images/wheel.png";

// post url
// const postUrl = "url";

function LandingPage() {
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [check, setCheck] = useState({});
  const [clicked, setClicked] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function mailHandler(e) {
    setMail(e.target.value);
  }

  function phoneHandler(e) {
    setNumber(e.target.value);
  }

  function checkHandler() {
    setCheckBox(true);
  }

  function submit(e) {
    e.preventDefault();
    if (mail.length === 0) {
      return alert("Plaese enter a valid email");
    } else if (number.length == 0) {
      return alert("Please enter a valid number");
    } else if (checkBox == false) {
      return alert("Please Agree to terms and conditions");
    }
    setCheck({ mail: mail, number: number });

    //Api TO Post Mail & Number Information

    // const postInfo = async () => {
    //   try {
    //     const response = await axios.post(url, {
    //       name: check.mail,
    //       phone: check.number,
    //     });
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // };

    setClicked(true);
  }

  if (clicked) {
    setTimeout(() => setRedirect(true), 1000);
  }

  return redirect ? (
    <Redirect to="/try-your-luck" />
  ) : (
    <div className="outer">
      <img className="wheel-img" src={wheel} alt="wheel" />
      <div>
        <form action="submit">
          <p>This is how EngageBud looks like in action!</p>
          <input
            onChange={mailHandler}
            className="inp"
            type="mail"
            placeholder="Email"
          />

          <input
            onChange={phoneHandler}
            className="inp"
            type="number"
            placeholder="Number"
          />
          <div className="c-box">
            <input onChange={checkHandler} type="checkbox" id="check" />
            <label htmlFor="check">
              I agree to receiving recurring automated messages at the number I
              have provided. Consent is not a condition to purchase.
            </label>
          </div>
          <div className="progress">
            <div className="fill a"></div>
          </div>
          <button type="submit" onClick={submit}>
            Try your luck
          </button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
