import Password from "../components/Password";
import React, { useState, useRef } from "react";
import WinAudio from "../assets/audio/win.mp3";

export default function Goliath() {
  const [isSuccess, setIsSuccess] = useState(false);
  const winRef = useRef(null);
  const handlePlay = (audio) => audio.current.play();

  const handleSuccess = () => {
    setIsSuccess(true);
    handlePlay(winRef);
    console.log("Password was correct!");
  };
  return (
    <div>
      {!isSuccess && (
        <div
          className="w-screen flex flex-col items-center justify-center h-screen"
          style={{
            background:
              "linear-gradient(0deg,rgba(226, 140, 19, 1) 0%, rgba(255, 247, 160, 1) 100%)",
          }}
        >
          <Password
            id="goliath"
            pass="Goliath"
            btnClass=""
            inputClass="p-2 bg-white text-black rounded mr-2"
            onSuccess={handleSuccess}
          />

          <img
            src="src\assets\images\Golias.png"
            className="w-full h-128 relative"
            alt=""
          />
        </div>
      )}
      {isSuccess && <h1>Congrats!</h1>}
      <audio ref={winRef}>
        <source src={WinAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
