import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, signUpSuccess } from "./authenticationSlice";
import bcrypt from "bcryptjs";
import { Link } from "react-router-dom";

const saltRounds = 10;

function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState(false);

  const users = useSelector((state) => state.authentication.users);

  const handleSignUp = (e) => {
    e.preventDefault();

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("User already exists! Please use a different email.");
      return;
    }

    bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
      if (err) {
        console.error("Error hashing password:", err);
        return;
      }

      const user = {
        name,
        email,
        password: hashedPassword,
      };

      dispatch(signUpSuccess(user));
      setPopup(true);
    });
  };

  return (
    <div className="signUp">
      {popup ? (
        <div className="popup">
          <span>Successfully Signed Up!</span> <br />
          <Link to="/login">Go to Login </Link>
        </div>
      ) : (
        <div className="card">
          <div className="cardImg">
            Oasis <br /> Infobyte
          </div>
          <div className="cardText">
            <h1>Registration</h1>
            <form>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="e.g Jhon Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
              <button
                disabled={email === ""}
                className="btn"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
