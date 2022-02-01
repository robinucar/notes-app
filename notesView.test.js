/**
 * @jest-environment jsdom
 */
const fs = require("fs");

const NotesModel = require("./notesModel");
const NotesView = require('./notesView')
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
});
