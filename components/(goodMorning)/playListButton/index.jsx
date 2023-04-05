"use client"
import React from 'react';
import {RiPauseCircleFill, RiPlayCircleFill} from 'react-icons/all';
import {useSelector, useDispatch} from 'react-redux';
import {musicPlay} from '@/redux/globalStore';

const PlayListButton = ({play}) => {
    const dispatch = useDispatch();
    const {musicPlayOpen} = useSelector(state => state.global)
    const handleClick = () => {
        dispatch(musicPlay(!musicPlayOpen))
    }
    return (
        <>
            {play
                ? <RiPauseCircleFill onClick={handleClick} className={`text-yesil absolute right-5 top-4 hover:scale-105 rounded-full  shadow-2xl`} size={50}/>
                : <RiPlayCircleFill  onClick={handleClick} className={`text-yesil absolute right-5 top-4  transition duration-300 group-hover:opacity-100 opacity-0 hover:scale-105 rounded-full shadow-2xl`} size={50}/>
            }
        </>
    );
};

export default PlayListButton;
