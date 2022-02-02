(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
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
          while (this.notesList.length > 0) {
            this.notesList.pop();
          }
          return this.notesList;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model2 = new NotesModel2()) {
          this.model = model2;
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
          const inputEl = document.querySelector("#note-input");
          inputEl.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var view = new NotesView(model);
  view.displayNotes();
  console.log(model.getNotes());
})();
