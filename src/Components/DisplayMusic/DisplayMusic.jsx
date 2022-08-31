import DeleteButton from '../DeleteButton/DeleteButton';
import UpdateSong from '../UpdateSong/UpdateSong';

const DisplayMusic = (props) => {
    return (
        <div style={{marginLeft:'10%', marginRight:'10%'}}>
        <table class='table table-light'>
            <thead class="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Song Options</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map((song) => {
                    return (
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <br></br>
                        <DeleteButton id={song.id} getAllSongs={props.getAllSongs}/><UpdateSong id={song.id} song={song} getAllSongs={props.getAllSongs}/>
                    </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    )
}

export default DisplayMusic;