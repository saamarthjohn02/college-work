/*import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <header className="navbar">
        <h2>EduVault</h2>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <div className="dropdown">
  <button className="dropbtn">Login ▼</button>

  <div className="dropdown-content">
    <a href="/student-login">Student Login</a>
    <a href="/teacher-login">Teacher Login</a>
  </div>
</div>
        </nav>
      </header>

      <section className="hero">
        <h1>Student Learning Portal</h1>

        <p>
          Access all your subject notes uploaded by your teachers anytime,
          anywhere.
        </p>

        <div className="buttons">
          <button>Student Login</button>
          <button>Teacher Login</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose EduVault?</h2>

        <div className="cards">
          <div className="card">
            <h3>📚 Subject Notes</h3>
            <p>Access notes for every subject in your semester.</p>
          </div>

          <div className="card">
            <h3>👨‍🏫 Teacher Uploads</h3>
            <p>Teachers can upload and organize notes easily.</p>
          </div>

          <div className="card">
            <h3>⚡ Fast Access</h3>
            <p>View and download notes with a single click.</p>
          </div>

          <div className="card">
            <h3>🔒 Secure Login</h3>
            <p>Separate student and teacher portals.</p>
          </div>
        </div>
      </section>

      <section className="subjects">
        <h2>Subjects</h2>

        <div className="subject-list">
          <div>Programming in C</div>
          <div>Java</div>
          <div>DBMS</div>
          <div>Web Development</div>
          <div>Computer Networks</div>
          <div>Operating Systems</div>
        </div>
      </section>

      <section className="steps">
        <h2>How It Works</h2>

        <div className="step-box">
          <div>1. Login</div>
          <div>2. Select Subject</div>
          <div>3. View Notes</div>
          <div>4. Download</div>
        </div>
      </section>

      <footer>
        <p>© 2026 EduVault Student Portal</p>
      </footer>
    </>
  );
}

export default LandingPage;*/
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <header className="navbar">

        <h2>EduVault</h2>

        <nav>

          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

          <Link className="login-btn" to="/login">
            Login
          </Link>

        </nav>

      </header>

      <section className="hero">

        <h1>Student Learning Portal</h1>

        <p>
          Access all your subject notes uploaded by your teachers anytime,
          anywhere.
        </p>

      </section>

      <section className="features">

        <h2>Why Choose EduVault?</h2>

        <div className="cards">

          <div className="card">
            <h3>📚 Subject Notes</h3>
            <p>Access all notes uploaded by your teachers.</p>
          </div>

          <div className="card">
            <h3>👨‍🏫 Teacher Uploads</h3>
            <p>Teachers can upload notes anytime.</p>
          </div>

          <div className="card">
            <h3>⚡ Fast Access</h3>
            <p>Quick and secure downloads.</p>
          </div>

          <div className="card">
            <h3>🔒 Secure Login</h3>
            <p>Separate login for students and teachers.</p>
          </div>

        </div>

      </section>

      <section className="subjects">

    <div className="subjects-container">

        <h2>Subjects</h2>

        <div className="subject-list">

            <div>Programming in C</div>

            <div>Java</div>

            <div>DBMS</div>

            <div>Web Development</div>

            <div>Computer Networks</div>

        </div>

    </div>

</section>

      <section className="steps">

        <h2>How It Works</h2>

        <div className="step-box">

          <div>1. Login</div>

          <div>2. Choose Subject</div>

          <div>3. Open Notes</div>

          <div>4. Download</div>

        </div>

      </section>

      <footer>

        <p>© 2026 EduVault Student Portal</p>

      </footer>

    </>
  );
}

export default LandingPage;