import axios from 'axios';
import React, { useState } from 'react';

const AddNewSong = (props) => {

    async function postNewSong(newSong){
        const response = await axios.post('http://127.0.0.1:8000/music/', newSong);
        console.log(response.data)
    }

    const [songName, setSongName] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            songName: songName,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre,
        };
        console.log(newSong);
        props.AddNewSong(newSong);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div><label>Song Name</label>
            <input value={songName} onChange={(event) => setSongName(event.target.value)}/></div>
            <div><label>Artist</label>
            <input value={artist} onChange={(event) => setArtist(event.target.value)}/></div>
            <div><label>Album</label>
            <input value={album} onChange={(event) => setAlbum(event.target.value)}/></div>
            <div><label>Release Date</label>
            <input value={releaseDate} onChange={(event) => setDate(event.target.value)}/></div>
            <div><label>Genre</label>
            <input value={genre} onChange={(event) => setGenre(event.target.value)}/></div>
            <button type="submit" onClick={postNewSong}>Add Song To Library</button>
        </form>
        </div>
    );
}

export default AddNewSong;