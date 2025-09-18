import Password from "../components/Password";
import React, { useState, useRef, useEffect } from "react";
import WinAudio from "../assets/audio/win.mp3";
import Golias from "../assets/svg/Golias.svg";
import GoliasDefeat from "../assets/svg/GoliasDefeat.svg";

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
      <h1>HELLO</h1>
      {!isSuccess && (
        
        <div
          className="w-screen flex flex-col items-center justify-center h-screen"
          style={{
            background:
              "linear-gradient(0deg,rgba(226, 140, 19, 1) 0%, rgba(255, 247, 160, 1) 100%)",
          }}
        >
          <h1>HELLO!!!</h1>
          <object data={Golias} type=""></object>
          <Password
            id="goliath"
            pass="Goliath"
            btnClass=""
            inputClass="p-2 bg-white text-black rounded mr-2"
            onSuccess={handleSuccess}
          />
        </div>
      )}
      {isSuccess && (
        <div
          className="w-screen flex flex-col items-center justify-center h-screen"
          style={{
            background:
              "linear-gradient(0deg,rgba(226, 140, 19, 1) 0%, rgba(255, 247, 160, 1) 100%)",
          }}
        >
          <object data={GoliasDefeat} type=""></object>
        </div>
      )}
      <audio ref={winRef}>
        <source src={WinAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
