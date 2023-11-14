function SignUp() {
  return (
    <div className="signUp">
      <div className="card">
        <div className="cardImg">
          Oasis <br /> Infobyte
        </div>
        <div className="cardText">
          <h1>Registration</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" placeholder="e.g Jhon Doe" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="e.g jhondoe7487@gmail.com" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Minimun of 6 characters" />
            </div>
            <button className="btn">Sign Up</button>
          </form>
          <p>
            Already have an account? <a href="\">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
