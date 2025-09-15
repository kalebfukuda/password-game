import Password from "../components/Password";
import MatrixRain from "../components/MatrixRain";

export default function Matrix() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className="bg-black w-screen flex items-center justify-center h-screen">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Password
          id="goliath"
          pass="Goliath"
          btnClass=""
          inputClass="p-2 bg-white text-black rounded mr-2"
        />
      </div>
    </div>
  );
}
