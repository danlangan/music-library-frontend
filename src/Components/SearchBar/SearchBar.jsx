import React from 'react';
import { useState } from 'react';

const SearchBar = (props) => {

    const [foundSong, setFoundSong] = useState('');

    function searchMusic(event) {
        event.preventDefault();
        let response = props.songs.filter((song) => {
            if (song.title.includes(foundSong) ||
                song.artist.includes(foundSong) ||
                song.album.includes(foundSong) ||
                song.release_date.includes(foundSong) ||
                song.genre.includes(foundSong)) {
                    return true;
                }
                else {
                    return false;
                }
        });
        props.setSongs(response)
    };

    return (
        <form onSubmit={searchMusic}>
            <h3>Search Music Library</h3>
            <input type='text' placeholder="Start your search here..." value={foundSong} onChange={(event) => setFoundSong(event.target.value)}> </input>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;