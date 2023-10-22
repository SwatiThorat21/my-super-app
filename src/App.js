import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Genre from "./pages/Genre";

function App() {
  return (
    <>    
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/Category" element={<Genre />}></Route>
        </Routes>    
    </>
  );
}

export default App;
