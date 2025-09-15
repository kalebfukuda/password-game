import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleRedirect(path) {
    navigate(path); // manda para /sobre
  }

  return (
    <div className="bg-black w-screen flex flex-col items-center justify-center h-screen">
      <button className="m-2 w-32" onClick={() => handleRedirect("/Goliath")}>
        Goliath
      </button>
      <button className="m-2 w-32" onClick={() => handleRedirect("/Matrix")}>
        Matrix
      </button>
    </div>
  );
}
