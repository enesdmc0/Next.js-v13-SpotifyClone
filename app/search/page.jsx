import React from 'react';
import SearchContainer from '@/containers/SearchContainer';
import {search} from "@/data/search.json";
const Search = () => {
    return (
        <div className="w-mid absolute right-0 top-16 pb-32">
            <SearchContainer search={search}/>
        </div>
    );
};

export default Search;
