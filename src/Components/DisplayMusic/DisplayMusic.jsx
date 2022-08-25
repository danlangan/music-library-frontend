import DeleteButton from '../DeleteButton/DeleteButton';

const DisplayMusic = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
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
                        <DeleteButton id={song.id} getAllSongs={props.getAllSongs}/>
                    </tr>
                    );
                })};
            </tbody>
        </table>
    );
}

export default DisplayMusic;