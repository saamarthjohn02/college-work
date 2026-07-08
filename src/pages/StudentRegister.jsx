import { Link } from "react-router-dom";
import "./StudentRegister.css";

function StudentRegister() {
  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Student Registration</h1>

        <form>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="text"
            placeholder="Course"
            required
          />

          <input
            type="text"
            placeholder="Semester"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button>
            Register
          </button>

        </form>

        <p>
          Already have an account?

          <Link to="/student-login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default StudentRegister;