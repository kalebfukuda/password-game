import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactTyped } from "react-typed";

export default function Numbers({
  pass,
  padClass = "",
  lenght = 4,
  message = ["", "Goliath success"],
}) {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);

  function handleClick(event) {
    if (result.length < lenght)
      setResult(result + event.currentTarget.innerText);
  }

  function clearResult() {
    setResult("");
  }

  function checkResult() {
    if (pass === result) {
      setSuccess(true);
    } else alert("error");
  }

  return (
    <div>
      {!success && (
        <div id="numberPad">
          <div className={padClass}>{result}</div>
          <div
            className="grid grid-cols-3 grid-rows-4 bg-gray-600 
                border border-gray-400 
                divide-x divide-gray-400 
                divide-y divide-gray-400
                font-bold
                text-2xl text-black"
          >
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              1
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              2
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              3
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              4
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              5
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              6
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              7
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              8
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              9
            </div>
            <div
              onClick={clearResult}
              className="h-24 w-24 flex items-center justify-center"
            >
              Clear
            </div>
            <div
              onClick={handleClick}
              className="h-24 w-24 flex items-center justify-center"
            >
              0
            </div>
            <div
              onClick={checkResult}
              className="h-24 w-24 flex items-center justify-center"
            >
              OK
            </div>
          </div>
        </div>
      )}
      {success && (
        <div
          id="divSuccess"
          className="h-screen w-screen bg-white
         flex justify-center items-center"
        >
          <ReactTyped
            strings={message}
            typeSpeed={50}
            backSpeed={0}
            showCursor={true}
            loop={false}
          />
        </div>
      )}
    </div>
  );
}
