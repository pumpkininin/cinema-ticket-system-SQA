import classes from './LoginPage.module.css'

const LoginPage = (props) => {
  return (
    <div
      className="login-section d-flex flex-column justify-content-center align-items-center"
      style={{color: "white"}}
    >
      <h2 className="my-4">Login</h2>
      <form action="/login" className="d-flex flex-column w-50">
        <input className="my-3 w-100 py-2" type="text" placeholder="Username" />
        <input
          className="my-3 w-100 py-2"
          type="password"
          placeholder="Password"
        />
        <div className="support-fields d-flex flex-row justify-content-between my-3">
          <div className="remember-me">
            <input type="checkbox" name="Remember me?" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="/forget">Forgot password?</a>
        </div>
        <div className="btn-submit row my-5">
          <button className="w-75 mx-auto px-auto py-2">Login</button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
