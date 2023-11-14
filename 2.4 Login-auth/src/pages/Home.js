import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <div className="actionBtns">
        <Link to="/SignUp">
          <button className="btn">Sign Up</button>
        </Link>
        <Link to="/Login">
          <button className="btn">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
