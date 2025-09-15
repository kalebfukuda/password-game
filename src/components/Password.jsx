import { useNavigate } from "react-router-dom";

export default function Password({ pass, inputClass, btnClass }) {
  const navigate = useNavigate();

  function checkInput() {
    console.log(pass);
  }

  return (
    <div>
      <input
        type="text"
        className={inputClass}
        placeholder="Enter password..."
      />
      <button onClick={checkInput()}>OK</button>
    </div>
  );
}
