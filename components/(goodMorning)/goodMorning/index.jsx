import React from 'react';
import PlayList from '@/components/(goodMorning)/playList';

const GoodMorning = () => {
    const data = [
        {id: 1, name: "EnesDmc", image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80", play: true},
        {id: 2, name: "School", image: "https://images.unsplash.com/photo-1680435438016-bd477f1f3ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", play: false},
        {id: 3, name: "GYM Sport", image: "https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", play: false},
        {id: 4, name: "English Speak", image: "https://images.unsplash.com/photo-1528243097678-739049bbf2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80", play: false},
        {id: 5, name: "Fenerbahce", image: "https://images.unsplash.com/photo-1649844232985-6daab6b19778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80", play: false},
        {id: 6, name: "Software", image: "https://images.unsplash.com/photo-1680444257344-e9eb152fb116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", play: false},
    ]
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
