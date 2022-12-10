import React from "react";
import wheel from "../Images/wheel.png";
import "../Components/ResultPage.css";
import { val } from "../Components/WheelPage.jsx";

function ResultPage() {

  function copyText(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copying text command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    document.body.removeChild(textArea);
  }

  function myFunction() {
    console.log("working");
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    copyText(copyText.value);
  }

  function generateCouponCode() {
    var code = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return code;
  }

  var couponCode = generateCouponCode();


  return (
    <div className="outer">
      <img className="wheel-img" src={wheel} alt="wheel" />
      <div className="form">
        <p>Congrats you won:</p>
        <p id="val">{val}</p>
        <div id="controls">
          <input type="text" value={couponCode} id="myInput" />
          <button id="copy" onClick={myFunction}>
            Copy text
          </button>
        </div>

        <button onClick={myFunction} id="close">
          Copy text and Close
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
