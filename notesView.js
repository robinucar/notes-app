/**
 * @jest-environment jsdom
 */
const NotesModel = require("./notesModel");
class NotesView {
  constructor(model = new NotesModel()) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    console.log(this.mainContainerEl)
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });
  }
}

module.exports = NotesView;
const n = new NotesView()
console.log(n)