import './App.css';
import React, { useState, useEffect } from 'react';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios'
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {
  
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data)
    setSongs(response.data)
  }
  
  return (
    <div>
      <head>
      </head>
      <body>
      <h2 class='heading-format'>Music<small className='text-muted'> Library</small></h2>
      <SearchBar songs={songs} setSongs={setSongs}/>
      <br></br>
      <DisplayMusic style={{marginLeft:'10%', marginRight:'10%'}} songs={songs} getAllSongs={getAllSongs}/>
      <h2 class='heading-format'>Add Song To Library</h2>
      <AddNewSong getAllSongs={getAllSongs}/>
      </body>
    </div>
  )
}

export default App;
