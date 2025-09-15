import Numbers from "../components/Numbers";

export default function Goliath() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className="bg-black w-screen flex items-center justify-center h-screen">
      <div className="flex">
        <Numbers
          pass="0504"
          padClass="flex justify-center text-3xl p-4 h-16 font-bold text-white"
          message={["", "Goliath success"]}
        ></Numbers>
      </div>
    </div>
  );
}
