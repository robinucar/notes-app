/**
* @jest-environment jsdom
*/
require('jest-fetch-mock').enableFetchMocks()
const NotesApi = require('./notesApi')
describe('NotesApi class', () => {
    it('calls fetch and loads notes', async() => {
        const api = new NotesApi();
        fetch.mockResponseOnce(JSON.stringify(
            'This note is coming from the server'
        ));

        api.loadNotes((result) =>{
            expect(result).toBe('This note is coming from the server')
        })
    })

    it('creates a new note to the server with POST request', () => {
        const api = new NotesApi();
        fetch.mockResponseOnce(JSON.stringify(
            'This note is going to the server'
        ));

        api.createNote(result => {
          expect(result).toBe('This note is going to the server')
        })

    })
})