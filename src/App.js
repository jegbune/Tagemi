import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Streaming from "./Routes/Streaming";
import Location from "./Routes/Location";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/LiveStreaming" element={<Streaming  />} />
    <Route path="/location" element={<Location />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
  );
}

export default App;
