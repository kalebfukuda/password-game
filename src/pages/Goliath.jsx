import { useNavigate } from "react-router-dom";
import Password from "../components/Password";

export default function Goliath() {
  const navigate = useNavigate();

  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className="bg-black w-screen flex items-center h-screen">
      <div>
        <Password />
      </div>
    </div>
  );
}
