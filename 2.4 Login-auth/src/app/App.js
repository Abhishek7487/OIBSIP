import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../features/authentication/Login";
import SignUp from "../features/authentication/SignUp";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import SecuredPage from "../pages/SecuredPage";

function App() {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div className="App">
      {user ? (
        <SecuredPage />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
