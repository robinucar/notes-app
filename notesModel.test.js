const NotesModel = require('./notesModel')

describe("NotesModel class", () => {
  const model = new NotesModel();
  it("should add note", () => {
    model.add("Buy Milk");
    model.add("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy Milk", "Go to the gym"]);
  });
});
