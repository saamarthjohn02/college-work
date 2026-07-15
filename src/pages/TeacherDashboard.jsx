import { Link } from "react-router-dom";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>EduVault</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li><Link to="/upload-notes">
    📤 Upload Notes
  </Link>
</li>
          <li>
  <Link to="/my-notes" className="nav-link">
    📚 My Notes
  </Link>
</li>
          <li>📖 Subjects</li>
          <li>👤 Profile</li>
          <li>🚪 Logout</li>
        </ul>

      </aside>

      <main className="content">

        <h1>Welcome Teacher 👋</h1>

        <p>Manage your study material and upload notes for students.</p>

        <div className="stats">

          <div className="stat-card">
            <h2>5</h2>
            <p>Subjects</p>
          </div>

          <div className="stat-card">
            <h2>0</h2>
            <p>Uploaded Notes</p>
          </div>

          <div className="stat-card">
            <h2>0</h2>
            <p>Downloads</p>
          </div>

        </div>

        <h2 className="heading">Subjects</h2>

        <div className="subjects">

          <div className="subject-card">
            💻 Programming in C
          </div>

          <div className="subject-card">
            ☕ Java
          </div>

          <div className="subject-card">
            💾 DBMS
          </div>

          <div className="subject-card">
            🌐 Web Development
          </div>

          <div className="subject-card">
            🌍 Computer Networks
          </div>

        </div>

      </main>

    </div>
  );
}

export default TeacherDashboard;