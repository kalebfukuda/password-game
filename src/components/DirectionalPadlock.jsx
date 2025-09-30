import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"; // Import specific icons

export default function DirectionalPadlock({ pass }) {
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
        <div>
          <div
            style={{ backgroundColor: "red", height: "300px", width: "300px" }}
          >
            <div
              id="centerCircle"
              className="rounded-full relative bg-primary"
              style={{
                backgroundColor: "white",
                top: "50px",
                left: "50px",
                height: "200px",
                width: "200px",
              }}
            ></div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <div className="text-xl bg-white p-2 rounded cursor-pointer">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <div className="text-xl bg-white p-2 rounded cursor-pointer">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <div className="text-xl bg-white p-2 rounded cursor-pointer">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="text-xl bg-white p-2 rounded cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} />
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
