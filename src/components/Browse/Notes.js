import { useState } from "react";

export default function ShowNotes() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || "");

  function handleChange(e) {
    setNotes(e.target.value);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  return (
    <>
      <div className="notes_container">
        <h1>All notes</h1>
        <textarea
          name="notes"
          className="notes_here"
          value={notes}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
}
