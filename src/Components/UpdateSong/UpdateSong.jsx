import axios from 'axios';
import React, { useState } from 'react';

const UpdateSong = (props) => {

    async function updateSongInfo(updatedSong){
        const response = await axios.put(`http://127.0.0.1:8000/music/${props.id}/`, updatedSong);
        console.log(response.data)
    };

    const [songName, setNewSongName] = useState(props.title);
    const [artist, setNewArtist] = useState(props.artist);
    const [album, setNewAlbum] = useState(props.album);
    const [releaseDate, setNewDate] = useState(props.release_date);
    const [genre, setNewGenre] = useState(props.genre);

    function handleClick(event) {
        event.preventDefault();
        let updatedSong = {
            songName: songName,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        console.log(updatedSong);
        props.updateSong(updatedSong);
    };

    return (
        <button onClick={alert}> Update Song
            <alert>
            <form onSubmit={handleClick}>
                <div><label>Song Name</label>
                <input value={songName} onChange={(event) => setNewSongName(event.target.value)}/></div>
                <br></br>
                <div><label>Artist</label>
                <input value={artist} onChange={(event) => setNewArtist(event.target.value)}/></div>
                <br></br>
                <div><label>Album</label>
                <input value={album} onChange={(event) => setNewAlbum(event.target.value)}/></div>
                <br></br>
                <div><label>Release Date</label>
                <input value={releaseDate} onChange={(event) => setNewDate(event.target.value)}/></div>
                <br></br>
                <div><label>Genre</label>
                <input value={genre} onChange={(event) => setNewGenre(event.target.value)}/></div>
                <br></br>
                <button type="submit" onClick={updateSongInfo}>Update Song</button>
            </form>
            </alert>
            </button>
    );

}

export default UpdateSong;