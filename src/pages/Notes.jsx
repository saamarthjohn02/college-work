import "./Notes.css";

function Notes() {
  return (
    <div className="notes-page">

      <h1>Programming in C</h1>

      <div className="notes-container">

        <div className="note-card">

          <h2>Unit 1 - Introduction to C</h2>

          <p>
            Variables, Data Types, Operators and Input Output Functions.
          </p>

          <button>Download PDF</button>

        </div>

        <div className="note-card">

          <h2>Unit 2 - Decision Making</h2>

          <p>
            if, if else, switch statements.
          </p>

          <button>Download PDF</button>

        </div>

        <div className="note-card">

          <h2>Unit 3 - Loops</h2>

          <p>
            for, while, do while loops.
          </p>

          <button>Download PDF</button>

        </div>

        <div className="note-card">

          <h2>Unit 4 - Arrays</h2>

          <p>
            One Dimensional and Two Dimensional Arrays.
          </p>

          <button>Download PDF</button>

        </div>

      </div>

    </div>
  );
}

export default Notes;