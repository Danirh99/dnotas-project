export function saveNote(title: string, body: string): any {

    let a_resp = checkData(title, body)
    if (a_resp['b_error']) {

        // Variable with the actual date in ms
        const date_today_format = new Date(Date.now());

        // Variable with the actual date in the correct format
        let today: string = date_today_format.toLocaleTimeString();

        // Variable with a random number and the title of the nore
        let id: string = Math.floor(Math.random() * 1000000000) + encodeURI(title);

        let note = new Note(id, title, today, body);

        // Check if we have localstorage data
        if (localStorage.getItem("notes") != null) {

            // // Save the data of the urls in a JSON Format
            let save_notes: { [id_url: string]: Note } = JSON.parse(localStorage.getItem("notes")!);

            // Save the new note
            save_notes[id] = note

            // Add the new note to the local Storage
            localStorage.setItem("notes", JSON.stringify(save_notes));
        }
        else {

            // Save the note in the local Storage
            let new_note: { [id_url: string]: Note } = {};
            new_note[id] = note;
            localStorage.setItem("notes", JSON.stringify(new_note));

        }
    }

    return a_resp;
}

function checkData(title: string, body: string): any {
    let a_resp = {
        "b_error": false,
        "s_title_message": 'You need a title',
        "s_body_message": 'You need a body message'
    }

    if (title.length > 0 && body.length > 0)
    {
        a_resp["b_error"] = true
    }

    if (title.length > 0) {
        a_resp["s_title_message"] = ""
    }
    if (body.length > 0) {
        a_resp["s_body_message"] = ""
    }

    return a_resp;
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