import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index.js';

function NoteApp(){
    const note = getInitialData();

    return(
        <div>
            <h1>Note</h1>
            <NoteList note={note} />
        </div>
    )
}

export default NoteApp;