import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Genre from "./pages/Genre";
import Browse from "./pages/Browse"

function App() {
  return (
    <>    
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/Category" element={<Genre />}></Route>
          <Route path="/Browse" element={<Browse />}></Route>
        </Routes>    
    </>
  );
}

export default App;
