import './components/index.js';

import notesData from "./data/local/notes.js";

document.addEventListener("DOMContentLoaded", () => {
  const noteList = document.querySelector("note-list");

  const savedNotes = JSON.parse(localStorage.getItem("notesData")) || notesData;
  noteList.notes = savedNotes;

  const noteForm = document.querySelector("note-form");
  noteForm.addEventListener("add-note", (e) => {
    noteList.handleAdd(e);
  });
});
