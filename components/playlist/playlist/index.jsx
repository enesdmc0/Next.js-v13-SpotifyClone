"use client"
import {useEffect, useState} from 'react';
import PlayListHeader from "@/components/playlist/playListHeader";
import PlaylistBottom from "@/components/playlist/playlistBottom";

const PlayList = ({id, data, playlistDetail}) => {
    const [findMusic, setFindMusic] = useState({})

    useEffect (() => {
        const find = data.filter(item => item.id === Number(id))[0]
        setFindMusic(find)
    }, [])

    return (
        <div>
            <PlayListHeader findMusic={findMusic} />
            <PlaylistBottom playlistDetail={playlistDetail}/>
        </div>
    );
};

export default PlayList;
