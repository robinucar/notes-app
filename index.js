const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const model = new NotesModel();
model.add('This is the first node');
 const view = new NotesView(model)

view.displayNotes()

console.log(model.getNotes())
