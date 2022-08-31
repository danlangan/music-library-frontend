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
        <form style={{marginLeft:'10%', marginRight:'10%'}} onSubmit={searchMusic}>
            <div style={{padding:'.5em'}}><input type='text' placeholder="Search Music Library Here..." class="form-control rounded" value={foundSong} onChange={(event) => setFoundSong(event.target.value)}/>
            <button style={{marginTop:"1em"}} type='submit' class='btn btn-outline-primary'>Search</button></div>
        </form>
    )
}

export default SearchBar;