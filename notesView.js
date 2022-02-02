/**
 * @jest-environment jsdom
 */
const NotesModel = require("./notesModel");
class NotesView {
  constructor(model = new NotesModel()) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    document.querySelector("#add-note").addEventListener("click", () => {
      const newNote = document.querySelector("#note-input").value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {
    const prevNotes = document.querySelectorAll("#note");
    prevNotes.forEach((n) => {
      n.remove();
    });

    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      noteEl.id = "note";
      this.mainContainerEl.append(noteEl);
    });
  }

  addNewNote(newNote) {
    this.model.add(newNote);
    this.displayNotes();
    const inputEl = document.querySelector('#note-input')
    inputEl.value = ''
    
  }
}

module.exports = NotesView;
