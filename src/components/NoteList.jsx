import React from "react";

function NoteList({note}){
    return(
        <div>
            <h1>Catatan</h1>
            {
                note.map((notes) =>(
                    <NotesBody key={notes.id} {...notes} />
                ))
            }
        </div>
    )
}

export default NoteList;