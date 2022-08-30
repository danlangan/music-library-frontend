import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const SearchBar = (props) => {
    async function filterSongs(){
        const response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response.data)
        setFilter(response.data)
    }
    const [filter, setFilter] = useState('');

    useEffect(() => {
        filterSongs();
      }, []);
    
    function handleClick(event) {
        event.preventDefault();
        let filteredSongs = [];
        console.log(filteredSongs);
        props.SearchBar(filteredSongs);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='Search Song Library...' 
                onChange={(e) => setFilter(e.target.value)}/>
                <br></br>
            <ul className='list'>
                {song.filter((song) => 
                song.name.toLowerCase().includes(...filter, filter)
                ).map((song) => (
                    <li id={song.id}>
                        {song.name}
                        {song.artist}
                        {song.album}
                        {song.releaseDate}
                        {song.genre}
                    </li>
                ))});
            </ul>
            <br></br>
            <button onClick={handleClick}>Display Search Results</button>
            
        </div>
    )
}

export default SearchBar;