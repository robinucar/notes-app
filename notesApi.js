class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }

  async createNote(noteEl) {
    const url = "http://localhost:3000/notes"
    const note = {content: noteEl}
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(note),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log(`data by createNote ${data}`)
      } catch (error) {
        console.log(error)
      }
  
  }
}

module.exports = NotesApi;
