import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Goliath from "./pages/Goliath";
import Matrix from "./pages/Matrix";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Goliath" element={<Goliath />} />
        <Route path="/Matrix" element={<Matrix />} />
      </Routes>
    </>
  );
}

export default App;
