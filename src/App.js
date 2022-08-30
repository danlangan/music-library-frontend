import './App.css';
import React, { useState, useEffect } from 'react';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios'

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
      <h1>Song Library</h1>
      </head>
      <body>
      <SearchBar songs={songs}/>
      <br></br>
      <h2>Add Song To Library</h2>
      <AddNewSong getAllSongs={getAllSongs}/>
      <DisplayMusic songs={songs} getAllSongs={getAllSongs}/>
      </body>
    </div>
  );
}

export default App;
