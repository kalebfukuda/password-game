import { useNavigate } from "react-router-dom";

export default function Password() {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/sobre"); // manda para /sobre
  }

  return (
    <div className="bg-black w-screen flex items-center justify-center h-screen">
      <input type="text" className="bg-white" />
    </div>
  );
}
