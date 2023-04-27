import Playlist from '@/components/playlist/playlist';


const PlaylistContainer = ({id, playlist, playlistDetail}) => {
    return (
        <div>
            <Playlist id={id} data={playlist} playlistDetail={playlistDetail}/>
        </div>
    );
};

export default PlaylistContainer;
