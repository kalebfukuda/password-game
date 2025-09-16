import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import LoseAudio from "../assets/audio/error.mp3";
import { ReactTyped } from "react-typed";

export default function Password({
  pass,
  inputClass,
  btnClass,
  message = ["", "Goliath success"],
  onSuccess,
}) {
  const [success, setSuccess] = useState(false);
  const loseRef = useRef(null);

  const handlePlay = (audio) => audio.current.play();

  function checkInput(event) {
    const input = document.getElementById("inputText");
    if (input.value === pass) {
      setSuccess(true);
      if (onSuccess) onSuccess();
    } else handlePlay(loseRef);
  }

  return (
    <div>
      {!success && (
        <div>
          <input
            id="inputText"
            type="text"
            className={inputClass}
            placeholder="Enter password..."
          />
          <button onClick={() => checkInput()}>OK</button>
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

      <audio ref={loseRef}>
        <source src={LoseAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
