export function saveNote(title: string, body: string): boolean {
    let b_error: boolean = false;
    if (checkData(title, body)) {

        b_error = true;

        // Variable with the actual date in ms
        const date_today_format = new Date(Date.now());

        // Variable with the actual date in the correct format
        let today: string = date_today_format.toLocaleTimeString();

        // Variable with a random number and the title of the nore
        let id: string = Math.floor(Math.random() * 1000000) + encodeURI(title);

        let note = new Note(id, title, today, body);

        // Check if we have localstorage data
        if (localStorage.getItem("notes") != null) {

            // // Save the data of the urls in a JSON Format
            let save_notes : { [id_url: string]: Note } = JSON.parse(localStorage.getItem("notes")!);

            // Save the new note
            save_notes[id] = note

            // Add the new note to the local Storage
            localStorage.setItem("notes", JSON.stringify(save_notes));
        }
        else {

            // Save the note in the local Storage
            let new_note : { [id_url: string]: Note } = {};
            new_note[id] = note;
            localStorage.setItem("notes", JSON.stringify(new_note));

        }
    }

    return b_error
}

function checkData(title: string, body: string): boolean {
    return title.length > 0 && body.length > 0;
}

class Note {
    private id: string = '';
    private title: string = '';
    private date: string = '';
    private body: string = '';

    constructor(id: string, title: string, date: string, body: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.body = body;
    }

}