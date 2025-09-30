import MatrixRain from "../components/MatrixRain";
import Numbers from "../components/Numbers";
import DirectionalPadlock from "../components/DirectionalPadlock";

export default function Matrix() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className="bg-black w-screen flex items-center justify-center h-screen">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* <Numbers
          pass="0504"
          padClass="flex justify-center text-3xl p-4 h-16 font-bold text-white"
          message={["", "Goliath success"]}
        ></Numbers> */}
      </div>
    </div>
  );
}
