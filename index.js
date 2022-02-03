const NotesApi = require("./notesApi");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const model = new NotesModel();
const view = new NotesView(model, api);
const api = new NotesApi();
api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});
view.displayNotes();
