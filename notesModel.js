class NotesModel {
  constructor(...noteList) {
    this.noteList = noteList;
  }
  add(note) {
    return this.noteList.push(note);
  }

  getNotes() {
    return this.noteList;
  }
}

module.exports = NotesModel;
