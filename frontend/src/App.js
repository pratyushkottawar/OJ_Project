import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/loginpage.js";
import Homepage from "./pages/homepage.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

{
  /* <Routes>
        <Route exact path="/login" element={<Loginpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/problem/:id" element={<Problem />} />
</Routes> */
}
