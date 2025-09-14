import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Goliath from "./pages/Goliath";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Goliath" element={<Goliath />} />
      </Routes>
    </>
  );
}

export default App;
