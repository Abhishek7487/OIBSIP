import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./authenticationSlice";
import bcrypt from "bcryptjs";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.authentication.users);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email);

    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          console.error("Error comparing passwords:", err);
          return;
        }

        if (result) {
          dispatch(loginSuccess(user));
        } else {
          alert("Invalid password");
        }
      });
    } else {
      alert("User not found! Please Sign Up.");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="cardImg">
          Oasis <br /> Infobyte
        </div>
        <div className="cardText">
          <h1>Login</h1>
          <form>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="e.g jhondoe7487@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Minimun of 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
