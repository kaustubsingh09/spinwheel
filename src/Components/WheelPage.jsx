import React, { useState } from "react";
import "../Components/WheelPage.css";
import img1 from "../Images/wheels.png";
import img2 from "../Images/gift.png";
import { Redirect } from "react-router-dom";
let val;

function WheelPage() {
  const [redirectNow, setRedirectNow] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  let discount = [
    "30% SITEWIDE OFF ",
    "BUY 1 GET 1 FREE",
    "FREE COFFEE MUG ON PURCHASE WORTH 1000+",
    "BUY 2 EFFERVESCENT TABLETS & GET 1 FREE",
    "FREE 500G TEA ON PURCHASE OF RS.500",
    "HOT CHOCLATE FREE WITH TEA",
  ];

  function spinHandler() {
    let wheels = document.querySelector(".wheels-img");
    val = null;

    let random = Math.floor(Math.random() * 3600) + 3600;
    // random = Math.floor(random / 10) * 10
    let mod = random % 360;
    if (mod >= 0 && mod <= 60) {
      val = discount[0];
    } else if (mod >= 61 && mod <= 120) {
      val = discount[1];
    } else if (mod >= 121 && mod <= 180) {
      val = discount[2];
    } else if (mod >= 181 && mod <= 240) {
      val = discount[3];
    } else if (mod >= 241 && mod <= 300) {
      val = discount[4];
    } else if (mod >= 301 && mod <= 360) {
      val = discount[5];
    }
    wheels.style.transform = "rotate(" + `${-random}deg` + ")";
    setBtnClicked(true);
    console.log(val);
  }

  if (btnClicked) {
    setTimeout(() => setRedirectNow(true), 7000);
  }

  return redirectNow ? (
    <Redirect to="/claim-prize" />
  ) : (
    <div className="outer-div">
      <img className="wheels-img" src={img1} alt="wheel-game" />
      <div className="inner-div">
        <img className="head-img" src={img2} alt="head" />
      </div>
      {!btnClicked && (
        <button onClick={spinHandler} className="btn">
          Spin now
        </button>
      )}
    </div>
  );
}
export {val}
export default  WheelPage;
