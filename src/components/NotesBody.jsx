import React from 'react';

function NotesBody ({title,createdAt, body}){
        return(
            <div>
                <NoteBody title={title} createdAt={createdAt} body={body} />
                <NoteButton />
            </div>
        )
}

export default NotesBody;