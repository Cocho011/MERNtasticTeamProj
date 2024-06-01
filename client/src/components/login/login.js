import React from "react";
// import icons using react-icons

const login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="Password" placeholder="Password" required />
        </div>
        <div className="Remember">
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="signup">
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
