import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <div className="actionBtns">
        <Link to="/signup">
          <button className="btn">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
