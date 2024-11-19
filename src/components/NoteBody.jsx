import React from 'react';

function NoteBody ({title, createdAt, body}){

        return(
            <div>
            <h2>{title}</h2>
            <p>{createdAt}</p>
            <p>{body}</p>
            </div>
            
        )
}