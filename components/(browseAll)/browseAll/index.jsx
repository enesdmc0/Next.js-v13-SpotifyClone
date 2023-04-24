import React from 'react';
import BrowseData from '@/components/(browseAll)/browseData';

const BrowseAll = ({data}) => {
    return (
        <div className="p-8 flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-white">Browse all</h1>
            <div className="flex flex-wrap justify-between gap-y-10">
                {data.map(item => (
                    <BrowseData key={item.key} {...item}/>
                ))}
            </div>
        </div>
    );
};

export default BrowseAll;
