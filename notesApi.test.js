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
})