class NotesModel {
  constructor(...notesList) {
    this.notesList = notesList;
  }
  add(note) {
    return this.notesList.push(note);
  }

  getNotes() {
    return this.notesList;
  }

  reset() {
      while(this.notesList.length > 0) {
          this.notesList.pop();
      }
      return this.notesList

      // or
    //   return this.notesList.length = 0
  }
}

module.exports = NotesModel;
