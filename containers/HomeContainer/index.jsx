import React from 'react';
import GoodMorning from '@/components/(goodMorning)/goodMorning';
import YourShows from '@/components/(yourShows)/yourShows';

const HomeContainer = ({playlist, yourShows}) => {
    return (
        <div className="flex flex-col">
            <GoodMorning data={playlist}/>
            <YourShows data={yourShows}/>
        </div>
    );
};

export default HomeContainer;
