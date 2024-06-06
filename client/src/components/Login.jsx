function Login({ setLoggedIn }) {
  return (
    <div>
      <h1>Login</h1>
      <input className="loginUsername" placeholder="username"></input>
      <input className="loginPasssword" placeholder="password"></input>
      <button onClick={() => setLoggedIn(true)}>Login</button>
    </div>
  );
}

export default Login;