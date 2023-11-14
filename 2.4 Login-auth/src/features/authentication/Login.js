function Login() {
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
              <input type="email" placeholder="e.g jhondoe7487@gmail.com" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Minimun of 6 characters" />
            </div>
            <button className="btn">Login</button>
          </form>
          <p>
            Don't have an account? <a href="\">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
