const { expect } = require("@jest/globals");
const NotesModel = require("./notesModel");

describe("NotesModel class", () => {
  const model = new NotesModel();
  it("returns empty notesList as defaultg", () => {
    expect(model.notesList).toEqual([]);
  });
  it("should add note", () => {
    model.add("Buy Milk");
    model.add("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy Milk", "Go to the gym"]);
  });

  it("returns an empty noteList", () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
