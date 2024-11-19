import React from 'react';

class NoteInput extends React.Component{
    render(){
        return(
            <form className='noteform'>
                <input type="text" placeholder="Tuliskan judul" />
                <input type="text" placeholder="Tuliskan catatanmu disini" />
                <button type="submit">Buat</button>
            </form>
        )
    }
}