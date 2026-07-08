import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>EduVault</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>📚 Subjects</li>
          <li>📝 Notes</li>
          <li>⬇ Downloads</li>
          <li>👤 Profile</li>
          <li>🚪 Logout</li>
        </ul>

      </aside>

      <main className="content">

        <h1>Welcome Student 👋</h1>

        <p>Select a subject to view available notes.</p>

        <div className="subjects">

          <div className="subject-card">Programming in C</div>

          <div className="subject-card">DBMS</div>

          <div className="subject-card">Java</div>

          
          <div className="subject-card">Computer Networks</div>

          <div className="subject-card">Web Development</div>

        </div>

        <h2>Recent Notes</h2>

        <div className="notes">
          <div className="note">📄 Programming in C</div>

          <div className="note">📄 HTML Notes</div>

          <div className="note">📄 CSS Notes</div>

          <div className="note">📄 JavaScript Notes</div>

          

        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;