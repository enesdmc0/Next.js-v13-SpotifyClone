import React from 'react';
import YourShow from '@/components/(yourShows)/yourShow';

const YourShows = () => {
    const data = [
        {id: 1, name: "The English We Speak", desc: "BBC Radio" , image: "https://plus.unsplash.com/premium_photo-1679436987388-52ece05745df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80", play: true},
        {id: 2, name: "School", desc: "Work Lesson" ,  image: "https://images.unsplash.com/photo-1680435438016-bd477f1f3ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", play: false},
        {id: 3, name: "GYM Sport", desc: "Sport" ,  image: "https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", play: false},
        {id: 4, name: "English Speak", desc: "English Classes101.com" ,  image: "https://images.unsplash.com/photo-1528243097678-739049bbf2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80", play: false},
    ]
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
