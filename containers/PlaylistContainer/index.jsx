import React from 'react';
import Playlist from '@/components/(playlist)/playlist';

const PlaylistContainer = ({id, playlist}) => {
    return (
        <div>
            <Playlist id={id} data={playlist}/>
        </div>
    );
};

export default PlaylistContainer;
