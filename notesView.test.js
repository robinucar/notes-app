/**
 * @jest-environment jsdom
 */
const fs = require("fs");

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
describe("Page view", () => {
  it("should display 2 notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    model.add("This is first note");
    model.add("This is second note");

    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
  it('should add note by click add button', () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
      const model = new NotesModel()
      const view = new NotesView()
      const inputEl = document.querySelector('#note-input')
      inputEl.value = 'test note'
      const addButtonEl = document.querySelector('#add-note')
      addButtonEl.click()
      
      expect(document.querySelectorAll('#note').length).toEqual(1);
      expect(document.querySelectorAll('#note')[0].innerText).toEqual('test note');
  })

  it('should clear previous notes and return the correct number of notes', () => {
        document.body.innerHTML = fs.readFileSync("./index.html");
      const model = new NotesModel()
      const view = new NotesView(model)
      model.add('hello')
      model.add('goodbye')

      view.displayNotes()
      view.displayNotes()
      expect(document.querySelectorAll('#note').length).toEqual(2);
  })
  
});
