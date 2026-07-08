import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TeacherLogin.css";

function TeacherLogin() {
    const navigate = useNavigate();
  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Teacher Login</h1>

        <p>Login to upload and manage your subject notes.</p>

        <form>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
  type="button"
  onClick={() => navigate("/teacher-dashboard")}
>
  Login
</button>

        </form>

        <p className="register-text">
          Don't have an account?
          <Link to="#"> Register</Link>
        </p>

        <Link className="back-btn" to="/login">
          ← Back
        </Link>

      </div>

    </div>
  );
}

export default TeacherLogin;