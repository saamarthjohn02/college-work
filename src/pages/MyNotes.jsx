import { Link } from "react-router-dom";
import "./MyNotes.css";

function MyNotes() {
  return (
    <div className="notes-page">

      <div className="top-bar">

        <h1>My Uploaded Notes</h1>

        <Link to="/upload-notes">
          <button className="upload-btn">
            + Upload Notes
          </button>
        </Link>

      </div>

      <div className="empty-notes">

        <h2>No Notes Uploaded Yet</h2>

        <p>
          You haven't uploaded any notes yet.
        </p>

        <p>
          Click the <strong>Upload Notes</strong> button above to upload your
          first note.
        </p>

      </div>

    </div>
  );
}

export default MyNotes;