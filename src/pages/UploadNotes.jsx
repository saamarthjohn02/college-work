import "./UploadNotes.css";

function UploadNotes() {
  return (
    <div className="upload-page">

      <div className="upload-box">

        <h1>Upload Notes</h1>

        <form>

          <label>Note Title</label>

          <input
            type="text"
            placeholder="Enter Note Title"
          />

          <label>Subject</label>

          <select>

            <option>Programming in C</option>

            <option>Java</option>

            <option>DBMS</option>

            <option>Web Development</option>

            <option>Computer Networks</option>

          </select>

          <label>Description</label>

          <textarea
            rows="5"
            placeholder="Enter Description"
          ></textarea>

          <label>Upload PDF</label>

          <input type="file" />

          <button>
            Upload Notes
          </button>

        </form>

      </div>

    </div>
  );
}

export default UploadNotes;