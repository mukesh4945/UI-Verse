import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from "./components/Buttons"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buttons />} /> 
      </Routes>
    </Router>
  );
}


export default App;
