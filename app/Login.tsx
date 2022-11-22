
import Link from "next/link";

const Login = () => {
  const Year = new Date().getFullYear();

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center vh-100 pt_100 home_pg">
        <main className="auth_form">
          <form>
            <div className="text-center">
              <h3>Welcome </h3>
              <p>Please Sign In.</p>
            </div>

            <div className="form-floating mt-2 mb-3">
              <input type="email" className="form-control" name="email" />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mt-2 mb-3">
              <input type="password" className="form-control" name="password" />
              <label htmlFor="password">Password</label>
            </div>
            <button className="w-100 default_btn" type="submit">
              Sign in
            </button>

            <p className="mt-5 mb-3 text-muted">
              No Account?{" "}
              <Link href="/signup" className="ps-2">
                Sign Up
              </Link>
            </p>

            <p className="mt-3 mb-3 text-muted">
              Forgot Password?{" "}
              <Link href="/password-reset" className="ps-2">
                Reset
              </Link>
            </p>

            <div className="mt-5 mb-3 text-center">
              <p className="text-muted">
                &copy; 
                <span className="pe-2"> {Year}</span>
                Jaja
              </p>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
