import { Route, Routes } from "react-router-dom";
// import "./styles/App.css";
import Loginpage from "./components/loginpage.js";
import Homepage from "./components/homepage.js";
// import Problem from "./components/problem";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Loginpage />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* <Route path="/problem/:id" element={<Problem />} /> */}
      </Routes>
    </>
  );
}
export default App;
