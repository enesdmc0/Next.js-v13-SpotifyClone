import React from 'react';
import SearchContainer from '@/containers/SearchContainer';
import {search} from "@/data/search.json";
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/header';
import PlayMusic from '@/components/play-music/playMusic';
const Search = () => {
    return (
        <>
            <Sidebar/>
            <Header/>
            <div className="w-middle absolute right-0 top-16 pb-32">
                <SearchContainer search={search}/>
            </div>
            <PlayMusic/>
        </>
    );
};

export default Search;
