import React from 'react';
import PlayList from '@/components/goodMorning/playList';

const GoodMorning = ({data}) => {

    return (
        <div className="flex flex-col gap-3 p-8">
            <h1 className="text-3xl font-bold text-white">Good morning</h1>
            <div className="flex flex-wrap justify-between gap-y-4">
                {data.map(item => (
                    <PlayList key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default GoodMorning;
