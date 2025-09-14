import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/sobre"); // manda para /sobre
  }

  return (
    <div className="bg-black w-screen flex items-center justify-center h-screen">
      <button onClick={handleRedirect}>Ir para Sobre</button>
    </div>
  );
}
