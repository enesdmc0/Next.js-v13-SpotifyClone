import React from 'react';
import GoodMorning from '@/components/(goodMorning)/goodMorning';
import YourShows from '@/components/(yourShows)/yourShows';

const HomeContainer = () => {
    return (
        <div className="flex flex-col">
            <GoodMorning/>
            <YourShows/>
        </div>
    );
};

export default HomeContainer;
