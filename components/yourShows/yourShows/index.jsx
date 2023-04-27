import React from 'react';
import YourShow from '@/components/yourShows/yourShow';

const YourShows = ({data}) => {

    return (
        <div className="flex flex-col gap-3 p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white hover:underline cursor-pointer">Your shows</h1>
                <span className="hover:underline font-bold text-gray-400 text-sm cursor-pointer">Show all</span>
            </div>
            <div className="flex justify-between">
                {data.map(item => (
                    <YourShow key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
};

export default YourShows;
