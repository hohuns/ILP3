import React from "react";
import Note from "./NoteEn";
import "./NoteList.css";

const NoteListEn = (props: { note: any[] }) => {
  return (
    <div style={{ overflowY: "scroll", height: 400 }}>
      <ul className="note-list">
        {props.note.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            date={note.date}
            text={note.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoteListEn;
