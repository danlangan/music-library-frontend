import axios from 'axios';
import React, { useState } from 'react';

const UpdateSong = (props) => {

    async function updateSongInfo(updatedSong){
        const response = await axios.put(`http://127.0.0.1:8000/music/${props.id}/`, updatedSong);
        console.log(response.data)
        props.getAllSongs()
    };

    const [songName, setNewSongName] = useState(props.song.title);
    const [artist, setNewArtist] = useState(props.song.artist);
    const [album, setNewAlbum] = useState(props.song.album);
    const [releaseDate, setNewDate] = useState(props.song.release_date);
    const [genre, setNewGenre] = useState(props.song.genre);

    function handleSubmit(event) {
        event.preventDefault();
        let updatedSong = {
            title: songName,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        console.log(updatedSong);
        updateSongInfo(updatedSong);
        
    };

    return (
        <details>
            <summary>Update Song<br></br><small className='text-muted'>Click Arrow For Options</small></summary>
            <form onSubmit={handleSubmit}>
                <div><label>Song Name</label>
                <input value={songName}  onChange={(event) => setNewSongName(event.target.value)}/></div>
                <br></br>
                <div><label>Artist</label>
                <input value={artist} onChange={(event) => setNewArtist(event.target.value)}/></div>
                <br></br>
                <div><label>Album</label>
                <input value={album} onChange={(event) => setNewAlbum(event.target.value)}/></div>
                <br></br>
                <div><label>Release Date</label>
                <input type="date" value={releaseDate} onChange={(event) => setNewDate(event.target.value)}/></div>
                <br></br>
                <div><label>Genre</label>
                <input value={genre} onChange={(event) => setNewGenre(event.target.value)}/></div>
                <br></br>
                <button type="submit" class='btn btn-outline-primary' onClick={updateSongInfo}>Update Song</button>
            </form>
            
        </details>
    );

}

export default UpdateSong;