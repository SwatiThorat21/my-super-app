import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Genre from "./pages/Genre";
import Browse from "./pages/Browse"
import MoviesList from "./pages/MoviesList"

function App() {
  return (
    <>    
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/Category" element={<Genre />}></Route>
          <Route path="/Browse" element={<Browse />}></Route>
          <Route path="/MoviesList" element={<MoviesList />}></Route>
        </Routes>    
    </>
  );
}

export default App;
