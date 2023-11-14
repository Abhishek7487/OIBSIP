import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../features/authentication/Login";
import SignUp from "../features/authentication/SignUp";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
